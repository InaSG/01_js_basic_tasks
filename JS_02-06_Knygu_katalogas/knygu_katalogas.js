/*
Sukurkite knygų katalogo app. Knygos gaunamos iš API. Sukūrus katalogą, 
integruoti knygų paieškos laukelį. Atlikti filtraciją pagal kategoriją. 
Savo nuožiūra stilizuokite atvaizdavimą. Naudoti API nuorodas:
https://in3.dev/knygos/
https://in3.dev/knygos/types/
*/

const didziojo_konteinerio_el = document.getElementById("container");
const pasirinkimu_el = document.getElementById("inputGroupSelect01");
const ieskoti_mygt_el = document.getElementById("ieskoti_mygt");
const modalo_konteinerio_el = document.getElementById("modalo_konteineris");
const ar_rasta_el = document.getElementById("ar_rasta");
const paieskos_ivesties_el = document.getElementById("exampleDataList");

function ipiesti_html(sarasas){
    let modalu_html = "";
    sarasas.forEach((knyga) => {
        modalu_html +=
            `<div>
    <button type="button" class="btn btn_m btn-outline-dark mt-1" id="knygos_modalo_mygt" data-bs-toggle="modal"
    data-bs-target="#staticBackdrop${knyga.id}"><b>&#9881;</b> ${knyga.author}.  
    ${knyga.title}
    </button>
<div class="modal fade" id="staticBackdrop${knyga.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel${knyga.id}"><b>${knyga.author}</b>  ${knyga.title}</h1>
            </div>
            <div class="modal-body">
                <img src="${knyga.img}" alt="knygos nuotrauka" class="modal_img">
                <p class ="modal_info"><b>Išleista:</b> ${gauti_isleidimo_data(knyga)}</p>
                <br>
                <p class ="modal_info"><b>Kaina:</b> ${knyga.price} &#8364;</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Uždaryti</button>
            </div>
        </div>
    </div>
</div>
</div>`;
    });
    return modalu_html;
}

function gauti_isleidimo_data(knyga){
    let data = new Date((knyga.time) *1000);
    let isleista = data.getFullYear();
    return isleista;
}

async function main() {
    const uzklausos = [fetch("https://in3.dev/knygos/"), fetch("https://in3.dev/knygos/types/")];
    const [knyguObj, zanruObj] = await Promise.all(uzklausos);

    const i_jsona = [knyguObj.json(), zanruObj.json()];
    const [knygos, zanrai] = await Promise.all(i_jsona);

    html_tekstas = `<option selected>Pasirinkite...</option>`;
    zanrai.forEach(zanras => {
        html_tekstas += `<option value="${zanras.id}">${zanras.title}</option>`
    });
    pasirinkimu_el.innerHTML = html_tekstas;
    console.log(knygos);
    console.log(zanrai); 

    ieskoti_mygt_el.addEventListener("click", () => {
        const ieskomu_knygu_sarasas = [];
        if (pasirinkimu_el.value && pasirinkimu_el.value != "Pasirinkite..." && paieskos_ivesties_el.value.length > 0) {
            knygos.forEach((knyga) => {
                if (knyga.type == pasirinkimu_el.value && knyga.title.toLowerCase().includes(paieskos_ivesties_el.value)) {
                    ieskomu_knygu_sarasas.push(knyga);
                };
            });
            if (ieskomu_knygu_sarasas.length > 0) {
                ar_rasta_el.innerHTML = "Pagal pateiktą užklausą radome:";
                
                didziojo_konteinerio_el.insertAdjacentElement("beforeend", modalo_konteinerio_el);
                modalo_konteinerio_el.innerHTML = ipiesti_html(ieskomu_knygu_sarasas);
            };
        } else if (pasirinkimu_el.value && pasirinkimu_el.value != "Pasirinkite...") {
            knygos.forEach((knyga) => {
                if (knyga.type == pasirinkimu_el.value) {
                    ieskomu_knygu_sarasas.push(knyga);
                };
            });
            if (ieskomu_knygu_sarasas.length > 0) {
                ar_rasta_el.innerHTML = "Pagal pateiktą užklausą radome:";
                
                didziojo_konteinerio_el.insertAdjacentElement("beforeend", modalo_konteinerio_el);
                modalo_konteinerio_el.innerHTML = ipiesti_html(ieskomu_knygu_sarasas);
            } else {
                ar_rasta_el.innerHTML = "Ieškomos knygos neradome";
                modalo_konteinerio_el.remove();
            };
        } else if (paieskos_ivesties_el.value.length > 0) {
            const ieskomu_knygu_sarasas = [];
            knygos.filter((knyga) => {
                if (knyga.title.toLowerCase().includes(paieskos_ivesties_el.value)) {
                    ieskomu_knygu_sarasas.push(knyga);
                };
            });
            if (ieskomu_knygu_sarasas.length > 0) {
                ar_rasta_el.innerHTML = "Pagal pateiktą užklausą radome:";
                
                didziojo_konteinerio_el.insertAdjacentElement("beforeend", modalo_konteinerio_el);
                modalo_konteinerio_el.innerHTML = ipiesti_html(ieskomu_knygu_sarasas);
            } else {
                ar_rasta_el.innerHTML = "Ieškomos knygos neradome";
                modalo_konteinerio_el.remove();
            };
        } else {
            ar_rasta_el.innerHTML = "Ieškomos knygos neradome";
            modalo_konteinerio_el.remove();
         };
    });
}

main();