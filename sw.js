const CACHE_NAME = 'lfn-drug-quizzes-v6';
const ASSETS = [
  './',
  './index.html',
  './calculator.html',
  './manifest.json',
  './quizzes/acetaminophen_quiz.html',
  './quizzes/activated_charcoal_quiz.html',
  './quizzes/adenosine_quiz.html',
  './quizzes/albumin_quiz.html',
  './quizzes/albuterol_quiz.html',
  './quizzes/alteplase_quiz.html',
  './quizzes/amiodarone_quiz.html',
  './quizzes/aspirin_quiz.html',
  './quizzes/atropine_quiz.html',
  './quizzes/atropine_quiz__1_.html',
  './quizzes/betamethasone_quiz.html',
  './quizzes/calcium_chloride_quiz.html',
  './quizzes/calcium_gluconate_quiz.html',
  './quizzes/cefazolin_quiz.html',
  './quizzes/cisatracurium_quiz.html',
  './quizzes/clevidipine_quiz.html',
  './quizzes/crofab_quiz.html',
  './quizzes/dexamethasone_quiz.html',
  './quizzes/dexmedetomidine_quiz.html',
  './quizzes/dextrose_quiz.html',
  './quizzes/diazepam_quiz.html',
  './quizzes/diltiazem_quiz.html',
  './quizzes/diphenhydramine_quiz.html',
  './quizzes/dobutamine_quiz__1_.html',
  './quizzes/dopamine_quiz__1_.html',
  './quizzes/droperidol_quiz.html',
  './quizzes/epinephrine_12_26.html',
  './quizzes/epinephrine_quiz.html',
  './quizzes/epinephrine_quiz__1_.html',
  './quizzes/epoprostenol_quiz__1_.html',
  './quizzes/esmolol_quiz__1_.html',
  './quizzes/etomidate_quiz.html',
  './quizzes/fentanyl_quiz.html',
  './quizzes/flumazenil_quiz.html',
  './quizzes/fosphenytoin_quiz.html',
  './quizzes/furosemide_quiz.html',
  './quizzes/heparin_quiz.html',
  './quizzes/hydralazine_quiz.html',
  './quizzes/hydromorphone_quiz.html',
  './quizzes/hydroxocobalamin_quiz.html',
  './quizzes/hypertonic_saline_12_39.html',
  './quizzes/hypertonic_saline_quiz.html',
  './quizzes/insulin_quiz.html',
  './quizzes/ipratropium_quiz.html',
  './quizzes/ketamine_quiz.html',
  './quizzes/labetalol_12_43.html',
  './quizzes/labetalol_quiz.html',
  './quizzes/lactated_ringers_quiz.html',
  './quizzes/levetiracetam_quiz.html',
  './quizzes/lfn_glucagon_12-34.html',
  './quizzes/lfn_mannitol_12-50.html',
  './quizzes/lfn_methylergonovine_12-51.html',
  './quizzes/lfn_methylprednisolone_12-52.html',
  './quizzes/lfn_metoprolol_12-53.html',
  './quizzes/lfn_midazolam_12-54.html',
  './quizzes/lfn_milrinone_12-55.html',
  './quizzes/lfn_morphine_12-56.html',
  './quizzes/lfn_nac_12-57.html',
  './quizzes/lfn_naloxone_12-58.html',
  './quizzes/lfn_nicardipine_12-59.html',
  './quizzes/lfn_nifedipine_12-60.html',
  './quizzes/lfn_nitroprusside_12-62.html',
  './quizzes/lfn_norepinephrine_12-63.html',
  './quizzes/lfn_octreotide_12-64.html',
  './quizzes/lfn_ondansetron_12-65.html',
  './quizzes/lfn_oxytocin_12-66.html',
  './quizzes/lfn_phenobarbital_12-67.html',
  './quizzes/lfn_phenylephrine_12-68.html',
  './quizzes/lfn_potassium_chloride_12-69.html',
  './quizzes/lfn_pralidoxime_12-70.html',
  './quizzes/lfn_promethazine_12-71.html',
  './quizzes/lfn_propofol_12-72.html',
  './quizzes/lfn_racemic_epi_12-73.html',
  './quizzes/lfn_rocuronium_12-74.html',
  './quizzes/lfn_sodium_bicarb_12-75.html',
  './quizzes/lfn_sodium_chloride_12-76.html',
  './quizzes/lfn_sodium_polystyrene_12-77.html',
  './quizzes/lfn_succinylcholine_12-78.html',
  './quizzes/lfn_tenecteplase_12-79.html',
  './quizzes/lfn_terbutaline_12-80.html',
  './quizzes/lidocaine_12_46.html',
  './quizzes/lidocaine_quiz.html',
  './quizzes/lipid_emulsion_quiz.html',
  './quizzes/lorazepam_quiz.html',
  './quizzes/magnesium_sulfate_quiz.html',
  './quizzes/nitroglycerin_quiz.html',
  './quizzes/ticagrelor_quiz.html',
  './quizzes/txa_quiz__1_.html',
  './quizzes/vasopressin_quiz__1_.html',
  './quizzes/vecuronium_quiz__1_.html'
];

// Install — cache all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — serve from cache, fall back to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
