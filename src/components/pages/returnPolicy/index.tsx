import Link from "next/link";

const policyOptions = [
  {
    header: "Berechtigung zur Rückgabe",
    description: "",
    listType: "list-disc",
    listItems: [
      {
        content:
          "Zeitrahmen: Sie haben 30 Tage ab dem Lieferdatum Zeit, eine Rückgabe zu beantragen.",
      },
      {
        content:
          "Bedingung: Das Balance Board muss in seinem ursprünglichen Zustand, unbenutzt und in der Originalverpackung zurückgegeben werden, einschließlich aller Zubehörteile und Anleitungen.",
      },
      {
        content:
          "Kaufnachweis: Für die Bearbeitung der Rückgabe ist eine Quittung oder ein Kaufbeleg erforderlich.",
      },
    ],
  },
  {
    header: "Rückgabeprozess",
    description: "",
    listType: "list-decimal",
    listItems: [
      {
        content:
          "Kontaktieren Sie unseren Kundendienst per E-Mail, um eine Rückgabe einzuleiten. Bitte geben Sie Ihre Bestellnummer und den Grund für die Rücksendung an.",
        contentHeader: "Rückgabe einleiten",
      },
      {
        content:
          "Sobald Ihre Rückgabeanforderung genehmigt ist, erhalten Sie von uns eine Rückgabegenehmigungsnummer (RA) und detaillierte Rückgabeanweisungen.",
        contentHeader: "Rückgabe-Autorisierung",
      },
      {
        content:
          "Bitte verpacken Sie das Balance Board sicher und legen Sie die RA-Nummer in das Paket. Senden Sie die Rücksendung an die in den Rücksendeanweisungen angegebene Adresse. Wir empfehlen die Verwendung eines verfolgbaren Versanddienstes, um sicherzustellen, dass wir den zurückgesandten Artikel erhalten.",
        contentHeader: "Versand der Rücksendung",
      },
    ],
  },
  {
    header: "Kosten für den Rückversand",
    description: "",
    listType: "list-disc",
    listItems: [
      {
        content:
          "Vom Kunden veranlasste Rücksendungen: Wenn die Rücksendung auf eine Meinungsänderung oder einen anderen Grund als einen defekten oder falschen Artikel zurückzuführen ist, sind Sie für die Rücksendekosten verantwortlich.",
      },
      {
        content:
          "Defekte oder fehlerhafte Artikel: Wenn Sie einen defekten oder falschen Artikel erhalten haben, übernehmen wir die Kosten für die Rücksendung.",
      },
    ],
  },
  {
    header: "Rückerstattungen",
    description: "",
    listType: "list-disc",
    listItems: [
      {
        content:
          "Bearbeitungszeit: Sobald wir Ihren zurückgegebenen Artikel erhalten und geprüft haben, werden wir Sie über die Genehmigung oder Ablehnung Ihrer Rückerstattung informieren. Genehmigte Rückerstattungen werden innerhalb von 5-7 Werktagen auf Ihre ursprüngliche Zahlungsmethode bearbeitet.",
      },
      {
        content:
          "Teilweise Rückerstattung: Wenn der Artikel nicht im Originalzustand zurückgegeben wird, kann je nach Zustand des zurückgegebenen Artikels eine Teilerstattung gewährt werden.",
      },
    ],
  },
  {
    header: "Nicht rückgabefähige Artikel",
    description: "",
    listType: "list-disc",
    listItems: [
      {
        content:
          "Artikel, die individuell angepasst oder personalisiert wurden.",
      },
      {
        content:
          "Artikel, die benutzt, vom Kunden beschädigt oder ohne Originalverpackung zurückgegeben wurden",
      },
    ],
  },
  {
    header: "Kontaktieren Sie uns",
    headerAlign: "text-center",
    description:
      "Wenn Sie Fragen zu unseren Liefer- oder Rückgaberichtlinien haben, zögern Sie bitte nicht, unseren Kundenservice zu kontaktieren. Wir sind gerne für Sie da!",
    listType: "list-disc",
    listItems: [],
  },
];

const ReturnPolicy = () => {
  return (
    <main
      className={
        "flex flex-col gap-8 items-center px-2 py-10 overflow-auto box-border max-w-5xl mx-auto"
      }
    >
      <h1
        className={
          "font-black text-4xl text-center xl:text-5xl fullHD:text-7xl mb-10"
        }
      >
        Rückgaberecht
      </h1>
      <p className={"text-base xl:text-2xl fullHD:text-4xl indent-4"}>
        Wir möchten, dass Sie mit Ihrem Kauf vollkommen zufrieden sind. Sollten
        Sie aus irgendeinem Grund nicht zufrieden sein, können Sie das
        Montessori Balance Board gemäß den folgenden Bestimmungen zurückgeben:
      </p>
      {policyOptions.map((option) => (
        <div
          key={option.header}
          className={`flex flex-col gap-5 ${option.headerAlign || ""}`}
        >
          <div className={" font-black text-2xl xl:text-3xl fullHD:text-5xl"}>
            {option.header}
          </div>
          <div className={"text-base xl:text-2xl fullHD:text-4xl indent-4"}>
            {option.description}
          </div>
          {!!option.listItems.length && (
            <ul className={`${option.listType} pl-8 flex flex-col gap-4`}>
              {option.listItems.map((item, index) => (
                <li
                  key={index}
                  className="text-sm xl:text-xl fullHD:text-3xl pl-2"
                >
                  <p>{item.content}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <div className={"mt-2 text-base xl:text-2xl fullHD:text-4xl"}>
        <Link href={"/"}>
          <button
            className={
              "flex gap-5 justify-center items-center font-extrabold text-orange-600 uppercase px-11 max-md:px-5 py-5 mt-3 xl:mt-5 max-w-full text-base xl:text-2xl fullHD:text-4xl whitespace-nowrap bg-orange-100 rounded-[40px] tracking-[5px] xl:tracking-[9.6px]  max-md:flex-wrap"
            }
          >
            ZURÜCK
          </button>
        </Link>
      </div>
    </main>
  );
};

export default ReturnPolicy;
