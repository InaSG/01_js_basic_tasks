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
                if (knyga.type == pasirinkimu_el.value && knyga.type == pasirinkimu_el.value) {
                    ieskomu_knygu_sarasas.push(knyga);
                };
            });
            console.log(ieskomu_knygu_sarasas);
            if (ieskomu_knygu_sarasas.length > 0) {
                ar_rasta_el.innerHTML = "Pagal pateiktą užklausą radome:";
                let modalu_html = "";
                ieskomu_knygu_sarasas.forEach((knyga) => {
                    modalu_html +=
                        `<div>
                <button type="button" class="btn btn_m btn-outline-dark mt-1" id="knygos_modalo_mygt" data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"><b>&#9881;</b> ${knyga.author}.  
                ${knyga.title}
                </button>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel"><b>${knyga.author}</b>  ${knyga.title}</h1>
                        </div>
                        <div class="modal-body">
                            <img src="${knyga.img}" alt="knygos nuotrauka" class="modal_img">
                            <br><br>
                            <p class ="kaina">Kaina: ${knyga.price} &#8364;</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Uždaryti</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>`;
                });
                didziojo_konteinerio_el.insertAdjacentElement("beforeend", modalo_konteinerio_el);
                modalo_konteinerio_el.innerHTML = modalu_html;
            };
        } 
        // else if (pasirinkimu_el.value && pasirinkimu_el.value != "Pasirinkite...") {
        //     knygos.forEach((knyga) => {
        //         if (knyga.type == pasirinkimu_el.value) {
        //             ieskomu_knygu_sarasas.push(knyga);
        //         };
        //     });
        //     if (ieskomu_knygu_sarasas.length > 0) {
        //         ar_rasta_el.innerHTML = "Pagal pateiktą užklausą radome:";
        //         let modalu_html = "";
        //         ieskomu_knygu_sarasas.forEach((knyga) => {
        //             modalu_html +=
        //                 `<div>
        //         <button type="button" class="btn btn_m btn-outline-dark mt-1" id="knygos_modalo_mygt" data-bs-toggle="modal"
        //         data-bs-target="#staticBackdrop"><b>&#9881;</b> ${knyga.author}.  
        //         ${knyga.title}
        //         </button>
        //     <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        //         aria-labelledby="staticBackdropLabel" aria-hidden="true">
        //         <div class="modal-dialog">
        //             <div class="modal-content">
        //                 <div class="modal-header">
        //                     <h1 class="modal-title fs-5" id="staticBackdropLabel"><b>${knyga.author}</b>  ${knyga.title}</h1>
        //                 </div>
        //                 <div class="modal-body">
        //                     <img src="${knyga.img}" alt="knygos nuotrauka" class="modal_img">
        //                     <br><br>
        //                     <p class ="kaina">Kaina: ${knyga.price} &#8364;</p>
        //                 </div>
        //                 <div class="modal-footer">
        //                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Uždaryti</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     </div>`;
        //         });
        //         didziojo_konteinerio_el.insertAdjacentElement("beforeend", modalo_konteinerio_el);
        //         modalo_konteinerio_el.innerHTML = modalu_html;
        //     } else {
        //         ar_rasta_el.innerHTML = "Ieškomos knygos neradome";
        //         modalo_konteinerio_el.remove();
        //     };
        // } else if (paieskos_ivesties_el.value.length > 0) {
        //     const knygu_sarasas = [];
        //     knygos.filter((knyga) => {
        //         if (knyga.title.toLowerCase().includes(paieskos_ivesties_el.value)) {
        //             knygu_sarasas.push(knyga);
        //         };
        //     });
        //     if (knygu_sarasas.length > 0) {
        //         ar_rasta_el.innerHTML = "Pagal pateiktą užklausą radome:";
        //         let modalu_html = "";
        //         knygu_sarasas.forEach((knyga) => {
        //             modalu_html +=
        //                 `<div>
        //         <button type="button" class="btn btn_m btn-outline-dark mt-1" id="knygos_modalo_mygt" data-bs-toggle="modal"
        //         data-bs-target="#staticBackdrop"><b>&#9881;</b> ${knyga.author}.  
        //         ${knyga.title}
        //         </button>
        //     <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        //         aria-labelledby="staticBackdropLabel" aria-hidden="true">
        //         <div class="modal-dialog">
        //             <div class="modal-content">
        //                 <div class="modal-header">
        //                     <h1 class="modal-title fs-5" id="staticBackdropLabel"><b>${knyga.author}</b>  ${knyga.title}</h1>
        //                 </div>
        //                 <div class="modal-body">
        //                     <img src="${knyga.img}" alt="knygos nuotrauka" class="modal_img">
        //                     <br><br>
        //                     <p class ="kaina">Kaina: ${knyga.price} &#8364;</p>
        //                 </div>
        //                 <div class="modal-footer">
        //                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Uždaryti</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     </div>`;
        //         });
        //         didziojo_konteinerio_el.insertAdjacentElement("beforeend", modalo_konteinerio_el);
        //         modalo_konteinerio_el.innerHTML = modalu_html;
        //     }
        // } else {
        //     ar_rasta_el.innerHTML = "Ieškomos knygos neradome";
        //     modalo_konteinerio_el.remove();
        //  };
    });
}

main();