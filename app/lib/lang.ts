import type { Lang } from "../data/content";

// Kept free of heavy imports: the client Header uses it too.

export const LANG_STORAGE_KEY = "portfolio-lang";

export const LANG_PATHS: Record<Lang, string> = { en: "/", es: "/es" };

// Runs in <head> of the English page before it paints. A visitor who chose
// Spanish before, or arrives from outside with a Spanish browser, goes to /es.
// Moving between pages of the site never redirects, so EN stays reachable.
export const LANG_REDIRECT_SCRIPT = `(function(){try{var s=localStorage.getItem(${JSON.stringify(
    LANG_STORAGE_KEY
)});if(s==="en")return;var r=document.referrer,internal=!!r&&r.indexOf(location.origin+"/")===0;if(s==="es"||(!internal&&/^es\\b/i.test(navigator.language||""))){location.replace("/es"+location.search+location.hash)}}catch(e){}})();`;
