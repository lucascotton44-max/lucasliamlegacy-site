/* ===========================================================================
   ONE SKY — constellation content
   https://www.lucasliamlegacy.com/sky

   THIS is the file you edit to publish. Nothing else.

   The sky page already works out the true, computed facts for every figure
   on its own — where it is right now, whether it ever sets from St. Peter's,
   its brightest star. Those always come first and you never have to write
   them. What goes here is the part only you can write: the story, the song,
   the video.

   Every field is optional. A figure with nothing here still opens and still
   has its computed facts. Add a line, push, and it is live.

   The name on the left MUST match the figure name exactly. The 22 the page
   knows are:

     Big Dipper · Little Dipper · Cassiopeia · Cepheus · Draco · Cygnus
     Lyra · Aquila · Perseus · Andromeda · Pegasus · Auriga · Taurus
     Orion · Gemini · Canis Major · Leo · Boötes · Corona Borealis
     Hercules · Scorpius · Sagittarius

   Five of them never set from Cape Breton — Big Dipper, Little Dipper,
   Cassiopeia, Cepheus and Draco — so those are the ones a viewer can always
   find, whatever the month. Worth knowing when you plan the release order.
   =========================================================================== */

window.ONE_SKY_FIGURES = {

  /* ---------------------------------------------------------------------
     A worked example. Delete the text, write your own, and it is published.
     --------------------------------------------------------------------- */
  "Perseus": {
    subtitle: "",              // small line under the name, e.g. "This week"
    facts: [
      // Each string is one card. The arrow steps through them in order.
      // Write the way you talk. Short is better than complete.
    ],
    song: "",                  // e.g. "songs/perseus.mp3"  (not wired yet)
    video: ""                  // e.g. "https://youtu.be/..."  (not wired yet)
  },

  "Cassiopeia": { facts: [] },
  "Big Dipper": { facts: [] },
  "Orion":      { facts: [] },
  "Cygnus":     { facts: [] }

  /* Add the rest as you write them. No trailing comma after the last one. */
};
