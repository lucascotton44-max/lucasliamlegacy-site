declare const Netlify: {
  env: {
    get(name: string): string | undefined;
  };
};

function requiredEnv(name: string): string {
  const value = Netlify.env.get(name);
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export default async function oneSkyKeepalive(): Promise<void> {
  const projectUrl = requiredEnv("ONE_SKY_SUPABASE_URL");
  const publishableKey = requiredEnv("ONE_SKY_SUPABASE_PUBLISHABLE_KEY");

  const endpoint = new URL("/rest/v1/sightings", projectUrl);
  endpoint.searchParams.set("select", "id");
  endpoint.searchParams.set("limit", "1");

  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      apikey: publishableKey,
      accept: "application/json",
    },
    cache: "no-store",
    signal: AbortSignal.timeout(10_000),
  });

  const body = await response.text();

  if (!response.ok) {
    throw new Error(
      `One Sky Supabase health check failed: HTTP ${response.status} ${body.slice(0, 200)}`,
    );
  }

  let rows: unknown;
  try {
    rows = JSON.parse(body);
  } catch {
    throw new Error("One Sky Supabase health check returned invalid JSON");
  }

  if (!Array.isArray(rows)) {
    throw new Error("One Sky Supabase health check returned a non-array payload");
  }

  console.log(
    JSON.stringify({
      event: "one-sky-supabase-health",
      ok: true,
      checkedAt: new Date().toISOString(),
      visibleRows: rows.length,
    }),
  );
}

export const config = {
  schedule: "17 2,8,14,20 * * *",
};
