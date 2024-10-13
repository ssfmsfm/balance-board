import Link from "next/link";

const deliveryInfoOptions = [
  {
    header: "Informationen zum Versand",
    description:
      "Wir sind bestrebt, Ihr Produkt sicher und effizient zu liefern. Das können Sie erwarten, wenn Sie eine Bestellung bei uns aufgeben:",
    listItems: [
      {
        id: 0,
        content:
          "Bearbeitungszeit: Alle Bestellungen werden innerhalb von 1-3 Werktagen bearbeitet. Sie erhalten eine Bestätigungs-E-Mail mit Informationen zur Sendungsverfolgung, sobald Ihre Bestellung versandt wurde.",
        subOptions: [],
      },
      {
        id: 1,
        content:
          "Versandkosten: Die Versandkosten sind im Preis inbegriffen, so dass Ihnen diese nicht in Rechnung gestellt werden.",
        subOptions: [],
      },
      {
        id: 2,
        content: "Lieferfristen:",
        subOptions: [
          {
            id: 1,
            content:
              "Standardversand: Die geschätzte Lieferzeit beträgt 3-7 Werktage, je nach Zielort.",
          },
          {
            id: 2,
            content:
              "Expressversand: Die geschätzte Lieferzeit beträgt 1-3 Werktage, je nach Zielort.",
          },
        ],
      },
      {
        id: 3,
        content:
          "Lieferpartner: Wir arbeiten mit renommierten Kurierdiensten wie DHL und UPS sowie mit lokalen Postdiensten zusammen, um sicherzustellen, dass Ihre Bestellung in einwandfreiem Zustand bei Ihnen ankommt.",
        subOptions: [],
      },
    ],
  },
  {
    header: "Verfolgung der Bestellung",
    description:
      "Sobald Ihre Bestellung versandt wurde, erhalten Sie eine Tracking-Nummer per E-Mail. Mit dieser Nummer können Sie den Status Ihrer Lieferung auf der Website des Kurierdienstes verfolgen.",
    listItems: [],
  },
  {
    header: "Fehlgeschlagene Zustellversuche",
    description:
      "Wenn die Zustellung Ihrer Bestellung aufgrund falscher Adressangaben fehlschlägt oder wenn niemand zur Annahme der Lieferung bereit ist, kann der Kurier einen erneuten Zustellversuch unternehmen oder das Paket an uns zurückschicken. Für die erneute Zustellung oder Rücksendung können zusätzliche Gebühren anfallen.",
    listItems: [],
  },
  {
    header: "Verlorene oder beschädigte Pakete",
    description:
      "In dem seltenen Fall, dass Ihr Paket während des Transports verloren geht oder beschädigt wird, setzen Sie sich bitte umgehend mit uns in Verbindung. Wir werden uns mit dem Kurierdienst in Verbindung setzen, um das Problem zu lösen und, falls erforderlich, einen Ersatz zu versenden oder eine Rückerstattung vorzunehmen.",
    listItems: [],
  },
];

const Delivery = () => {
  return (
    <main
      className={
        "flex flex-col gap-8 items-center px-2 py-10 overflow-auto box-border"
      }
    >
      <h1
        className={
          "font-black text-4xl text-center xl:text-5xl fullHD:text-7xl mb-10"
        }
      >
        Lieferbedingungen
      </h1>
      {deliveryInfoOptions.map((option) => (
        <div
          key={option.header}
          className="flex flex-col justify-center gap-5 max-w-5xl"
        >
          <div
            className={
              "text-center font-black text-2xl xl:text-3xl fullHD:text-5xl"
            }
          >
            {option.header}
          </div>
          <div className={"text-base xl:text-2xl fullHD:text-4xl indent-4"}>
            {option.description}
          </div>
          {!!option.listItems.length && (
            <ul className="list-disc pl-8 flex flex-col gap-4">
              {option.listItems.map((item) => (
                <li
                  key={item.id}
                  className="text-sm xl:text-xl fullHD:text-3xl pl-2"
                >
                  <p>{item.content}</p>
                  {!!item.subOptions.length && (
                    <ul className="list-circle pl-6 gap-3">
                      {item.subOptions.map((subOption) => (
                        <li
                          key={subOption.id}
                          className={"text-xs xl:text-lg fullHD:text-2xl"}
                        >
                          {subOption.content}
                        </li>
                      ))}
                    </ul>
                  )}
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

export default Delivery;
