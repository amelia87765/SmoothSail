"use client";
import Script from "next/script";

export default function Tickets() {
  return (
    <section className="bg-gradient-to-b from-[#4f554e] to-black w-full flex flex-col items-center relative overflow-x-hidden">
      <div className="z-50 text-center mt-[2.3rem] md:mt-[8rem]">
        <h2 className="text-[clamp(3rem,7vw,9rem)] text-red leading-tight">
          BILETY
        </h2>
        <div className="w-full max-w-[80vw] items-center mx-auto mt-16">
          <div className="flex flex-col gap-4 text-light_blue text-[clamp(0.9rem,1.75vw,2.5rem)]">
            <div className="flex gap-12">
              <div className="w-[28vw] shrink-0 font-mono text-left">
                UTC+0 // FOGGY SUNRISE
              </div>
              <div className="flex-1 text-left">
                do 29.09, 11:59 lub do wyczerpania puli
              </div>
              <div className="w-20 text-right">
                <strong>49zł</strong>
              </div>
            </div>

            <div className="flex gap-12">
              <div className="w-[28vw] shrink-0 font-mono text-left">
                UTC+1 // SMOOTH MORNIN&apos;
              </div>
              <div className="flex-1 text-left">
                do 09.10, 11:59 lub do wyczerpania puli
              </div>
              <div className="w-20 text-right">
                <strong>69zł</strong>
              </div>
            </div>

            <div className="flex gap-12">
              <div className="w-[28vw] shrink-0 font-mono text-left">
                UTC+2 // FULL NOON
              </div>
              <div className="flex-1 text-left">
                do 24.10, 23:59 lub do wyczerpania puli
              </div>
              <div className="w-20 text-right">
                <strong>89zł</strong>
              </div>
            </div>

            <div className="flex gap-12">
              <div className="w-[28vw] shrink-0 font-mono text-left">
                UTC+3 // SUNSET
              </div>
              <div className="flex-1 text-left">
                w dniu wydarzenia - na bramkach i online
              </div>
              <div className="w-20 text-right">
                <strong>99zł</strong>
              </div>
            </div>
            <p className="text-[clamp(0.75rem,1.5vw,1.5rem)] text-light_blue mt-6 text-center max-w-[80vw] mx-auto px-4">
              Kwoty przy zakupie mogą być powiększone o prowizję Operatora.
            </p>
            <p className="text-[clamp(0.75rem,1.5vw,1.5rem)] text-light_blue mt-12 mb-12 text-justify max-w-[80vw] mx-auto">
              Na wydarzeniu będzie możliwość zakupu limitowanego nakładu,
              ręcznie numerowanego, pamiątkowego artworku edycji 2025 (-1) o
              rozmiarze 50x70cm, na wysokiej jakości papierze — w cenie 120zł.
            </p>
          </div>
        </div>
      </div>

      <div
        id="going_frame"
        className="w-[80vw] bg-black/30 rounded-lg z-50"
      ></div>
      <div className="z-50 text-center mt-14 mb-[6rem]">
        <p className="text-[clamp(1rem,2vw,2.5rem)] text-light_blue mt-[8rem] text-justify max-w-[80vw] mx-auto px-4">
          Zadbamy o to, aby każdy występ był prawdziwie wyjątkowym
          doświadczeniem: koncertem premierowym lub projektem specjalnym
          przygotowanym pod to wydarzenie, a metafory zmiany i przejścia
          towarzyszyć będą odbiorcy już od pierwszych sekund w przestrzeni
          festiwalu.
          <br />
          <br />
          Wszystkie zaplanowane elementy stworzą doświadczenie, w którym czas
          przestaje płynąć zwykłym tempem. Będzie spowalniać, przyspieszać,
          zaginać się i odradzać. Tutaj każda aktywność to element większej
          całości, a każda minuta - inna niż poprzednia.
        </p>
      </div>
      <Script id="going-widget" strategy="afterInteractive">
        {`
const eventSlug = 'strefy-czasowe-2025-1';
const rundateSlug = 'gdynia-pazdziernik-2025';

window.addEventListener("DOMContentLoaded", function () {
  const iframeContainer = document.getElementById('going_frame');
  const loadingElement = document.createElement("div");

  if (document.getElementById("loading-element")) {
    return;
  }

  loadingElement.innerHTML = '<h2 id="loading-prompt">Trwa ładowanie formularza sprzedaży.</h2><h3>Formularz nie działa? Kup bilety w <a href="https://goingapp.pl/" rel="dofollow">Going.</a></h3>';
  loadingElement.id = "loading-element";
  loadingElement.style.fontFamily = "Helvetica, sans-serif";
  loadingElement.style.textAlign = "center";
  loadingElement.style.padding = "16px";

  if (iframeContainer) {
    iframeContainer.append(loadingElement);
  }
});

(function (G, o, i, n, g) {
  G.going = G.going || function () {
    [].push.apply((G.goingQ = G.goingQ || []), arguments);
  };
  G.goingSettings = { gv: '1.0.7' };
  n = o.getElementsByTagName('head')[0];
  g = o.createElement('script');
  g.async = true;
  g.src = i + '?gv=' + G.goingSettings.gv;
  n.appendChild(g);
})(window, document, 'https://places-script.goingapp.pl/script.js');

const isQueueInAddress = window.location.href.includes('queue=true');
const domain = isQueueInAddress ? 'https://queue.goingapp.pl' : 'https://goingapp.pl';

window.addEventListener('message', (event) => {
  const data = JSON.parse(event.data);
  if (data.queue && !isQueueInAddress) {
    const url = new URL(window.location.href);
    url.searchParams.append('queue', 'true');
    window.location.assign(url.origin + url.pathname + url.search);
  }
  if (data && document.getElementById("loading-prompt") && document.getElementById('going_frame')) {
    document.getElementById("loading-prompt")?.remove();
    document.getElementById('going_frame').append(document.getElementById("loading-element"));
  }
});

going(
  {
    type: 'SET_PARENT',
    payload: 'going_frame',
  },
  {
    type: 'SET_APP_URL',
    payload: domain + '/pinRundate/' + eventSlug + '/' + rundateSlug + '/zakup',
  },
  {
    type: 'GET_ERROR_FROM_URL',
    payload: 'error',
  },
  {
    type: 'SET_CURRENT_URL',
    payload: window.location.href
  },
  {
    type: 'GET_TRANSACTION_FROM_URL',
    payload: 'transactionId'
  },
  {
    type: "SET_LANGUAGE",
    payload: 'pl',
  },
  {
    type: 'GET_EVENT_SLUG_FROM_URL',
    payload: 'eSlug',
  },
  {
    type: 'GET_RUNDATE_SLUG_FROM_URL',
    payload: 'rSlug',
  },
  {
    type: 'GET_EVENT_ID_FROM_URL',
    payload: 'rid',
  },
  {
    type: "LOAD_EXTERNAL_STYLE",
    payload: 'https://embed-config-meqesdpgvc.s3-eu-west-1.amazonaws.com/smoothsail.css',
  }
);

if (window.location.href.includes("transactionId")) {
  document.getElementById("loading-element").remove();
}
`}
      </Script>
    </section>
  );
}
