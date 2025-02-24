/*
HTML generavimas iš JSON naudojant „Node.js” http modulį
Tikslas:
Sukurkite „Node.js“ serverį be, kuris sugeneruotų HTML puslapį iš JSON failo ir atvaizduotų jį /topics maršrute kaip <ul> sąrašą.

Reikalavimai:
1. Naudoti tik http modulį.
2. Perskaityti JSON objektų masyvą su title, description ir url laukais iš JSON failo.
3. Sukurti „Node.js“ serverį, kuris apdoros užklausas į /topics adresą.
4. Sugeneruoti HTML dokumentą su <ul> sąrašu, kuriame kiekvienas JSON objektas bus atvaizduotas kaip <li> elementas.
5. Kiekvienas <li> turės nuorodą (<a>) į url, su title kaip tekstu.
6. Jei vartotojas pasiekia /, grąžinti pradinį puslapį su nuoroda į /topics.
7. Jei vartotojas bando pasiekti kitą maršrutą, grąžinti 404 Not Found.

JSON Failas pateikiamas šiuo adresu:
https://drive.google.com/file/d/1qsILWJri3Zjht7-RtfeC6SPsPIsymudM/view?usp=drive_link
*/
import http from "http";
import fs from "node:fs";

http.createServer((req, res) => {
    if (req.url=="/topics"){
        const html = String(fs.readFileSync("index.html"));
        const data = JSON.parse(String(fs.readFileSync("topics.json")));
        let htmlText = `<h1>Temos:</h1>
                        <ul>`
        data.forEach((topic) => {
            htmlText += `<li><a href="${topic.url}">${topic.title}</a></li>`;
        });
        htmlText += `</ul>`;
        const full_html = html.replace("{{SABLONAS}}", htmlText);
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(full_html);
    } else if (req.url=="/"){
        const html = String(fs.readFileSync("index.html"));
        let htmlText = `<div>
                        <h2>Džiaugiamės, kad aplankėte mūsų puslapį</h2>
                        <p>Norėdami pamatyti temų sąrašą spauskite <a href="http://localhost:3000/topics">šią nuorodą</a></p>
                        </div>`;
        const full_html = html.replace("{{SABLONAS}}", htmlText);
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(full_html);
    } else {
        const htmlText = `<h1> 404</h1>
                            <h3> Not Found </h3>`;
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write(htmlText);

    };
    res.end();
}).listen(3000);