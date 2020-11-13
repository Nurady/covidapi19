// Data Global Seluruh Negara
fetch('https://covid19.mathdro.id/api')        
    .then(response => response.json())
    .then(response => {
        const countries = response;         
        const dateUpdateGlobal = new Date(response.lastUpdate).toLocaleString('id-ID');
                
        let cards = ``;     
        cards += `<div class="col-md-4 my-5 text-center">         
                        <div class="card text-white bg-info mb-3" style="">
                            <div class="card-header">KASUS POSITIP</div>
                                <div class="card-body">
                                    <h5 class="card-title">${countries.confirmed.value.toLocaleString("id-ID")}</h5>                                                                      
                                </div>
                        </div>                       
                    </div>
                    <div class="col-md-4 my-5 text-center">         
                        <div class="card text-white bg-info mb-3" style="">
                            <div class="card-header">KASUS SEMBUH</div>
                                <div class="card-body">
                                    <h5 class="card-title">${countries.recovered.value.toLocaleString("id-ID")}</h5>                                  
                                </div>
                        </div>                       
                    </div>
                    <div class="col-md-4 my-5 text-center">         
                        <div class="card text-white bg-info mb-3" style="">
                            <div class="card-header">KASUS MENINGGAL</div>
                                <div class="card-body">
                                    <h5 class="card-title">${countries.deaths.value.toLocaleString("id-ID")}</h5>                                  
                                </div>
                        </div>                       
                    </div>`;       
        
        const allCountry = document.querySelector('.global');
        allCountry.innerHTML= cards;

        const lastUpdateGlobal = document.querySelector('.DateTime');
        lastUpdateGlobal.innerHTML= dateUpdateGlobal;        
});

// Data Komulatif Indonesia
fetch('https://indonesia-covid-19.mathdro.id/api')        
    .then(response => response.json())
    .then(response => {        
        const dateUpdateIndonesia = new Date(response.lastUpdate).toLocaleString('id-ID');
        
        const dataIndonesia = response;          
        let dataCoronaindonesia = '';
        dataCoronaindonesia += `
            <div class="col-md-3 my-5 text-center">         
                <div class="card text-white bg-primary mb-3" style="">
                    <div class="card-header">JUMLAH KASUS</div>
                        <div class="card-body">
                            <h5 class="card-title">${dataIndonesia.jumlahKasus.toLocaleString("id-ID")}</h5>                                  
                        </div>
                </div>                       
            </div>
            <div class="col-md-3 my-5 text-center">         
                <div class="card text-white bg-primary mb-3" style="">
                    <div class="card-header">KASUS POSITIF</div>
                        <div class="card-body">
                            <h5 class="card-title">${dataIndonesia.perawatan.toLocaleString("id-ID")}</h5>                                  
                        </div>
                </div>                       
            </div>
            <div class="col-md-3 my-5 text-center">         
                <div class="card text-white bg-primary mb-3" style="">
                    <div class="card-header">KASUS SEMBUH</div>
                        <div class="card-body">
                            <h5 class="card-title">${dataIndonesia.sembuh.toLocaleString("id-ID")}</h5>                                  
                        </div>
                </div>                       
            </div>
            <div class="col-md-3 my-5 text-center">         
                <div class="card text-white bg-primary mb-3" style="">
                    <div class="card-header">KASUS MENINGGAL</div>
                        <div class="card-body">
                            <h5 class="card-title">${dataIndonesia.meninggal.toLocaleString("id-ID")}</h5>                                  
                        </div>
                </div>                       
            </div>            
            `;          
        const kasusIndonesia = document.querySelector('.coronaIndonesia');
        kasusIndonesia.innerHTML= dataCoronaindonesia;    
        
        const lastUpdateIndonesia = document.querySelector('.DateTime2');
        lastUpdateIndonesia.innerHTML= dateUpdateIndonesia;  
});


// Data Kasus Per Provinsi
fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')        
    .then(response => response.json())
    .then(response => {       
        let dataProvinsi = response.data;   
        let data= new Array(dataProvinsi[0],dataProvinsi[1],dataProvinsi[2],
                            dataProvinsi[3],dataProvinsi[4],dataProvinsi[5],
                            dataProvinsi[6],dataProvinsi[7],dataProvinsi[8],
                            dataProvinsi[9],dataProvinsi[10],dataProvinsi[11],
                            dataProvinsi[12],dataProvinsi[13],dataProvinsi[14],
                            dataProvinsi[15],dataProvinsi[16],dataProvinsi[17],
                            dataProvinsi[18],dataProvinsi[19],dataProvinsi[20],
                            dataProvinsi[21],dataProvinsi[22],dataProvinsi[23],
                            dataProvinsi[24],dataProvinsi[25],dataProvinsi[26],
                            dataProvinsi[27],dataProvinsi[28],dataProvinsi[29],
                            dataProvinsi[30],dataProvinsi[31],dataProvinsi[32],
                            dataProvinsi[33]);     
        let x = 0;
        let y = x+1;
        let dataCoronaProvinsi = ``;

        data.forEach(prov => {
            dataCoronaProvinsi += `            
            <tr>
              <td>${y++}</td>
              <td>${prov.provinsi.toLocaleString("id-ID")}</td>
              <td>${prov.kasusPosi.toLocaleString("id-ID")}</td>
              <td>${prov.kasusSemb.toLocaleString("id-ID")}</td>
              <td>${prov.kasusMeni.toLocaleString("id-ID")}</td>
            </tr> 
            `;   
        });
               
        const coronaprovinsi = document.querySelector('.coronaProvinsi');
        coronaprovinsi.innerHTML= dataCoronaProvinsi;          
});


// Data Kasus Harian Indonesia
fetch('https://indonesia-covid-19.mathdro.id/api/harian')        
    .then(response => response.json())
    .then(response => {              
        let days = response.data;

        let dataCoronaHarian = ``;
        days.forEach(day => {
            dataCoronaHarian += `            
            <tr>           
              <td>${day.harike}</td>         
              <td>${day.jumlahKasusKumulatif}</td>
              <td>${day.jumlahPasienSembuh}</td>
              <td>${day.jumlahPasienMeninggal}</td>         
              <td>${day.jumlahPasienDalamPerawatan}</td>
              <td>${day.jumlahKasusBaruperHari}</td>
              <td>${day.jumlahKasusDiperiksa}</td>         
              <td>${day.jumlahNegatif}</td>                
            </tr> 
            `;   
        });
               
        const coronaharian = document.querySelector('.coronaHarian');
        coronaharian.innerHTML= dataCoronaHarian;          
});



