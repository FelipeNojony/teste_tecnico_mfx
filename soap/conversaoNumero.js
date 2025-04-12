    async function converterNumeroExtenso() {
    const numero = document.getElementById("numero").value;
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url =
        proxy + "https://www.dataaccess.com/webservicesserver/NumberConversion.wso";
    const body = `
        <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <soap:Body>
                <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">
                    <ubiNum> ${numero} </ubiNum> 
                </NumberToWords >
            </soap:Body>
        </soap:Envelope>
        `;

    try {
        const resposta = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "text/xml;charset=UTF-8",
            SOAPAction: "http://www.dataaccess.com/webservicesserver/NumberToWords",
        },
        body,
        });

        const texto = await resposta.text();
        console.log(texto);
        const xmlDoc = new DOMParser().parseFromString(texto, "text/xml");
        const resultado = xmlDoc.getElementsByTagName("m:NumberToWordsResult")[0]
        .textContent;

        document.getElementById("resultado").textContent = resultado
        ? `${resultado}`
        : "Não foi possivel converter o número";
    } catch (erro) {
        document.getElementById("resultado").textContent =
        "Erro ao converter " + erro.message;
    }
    }
