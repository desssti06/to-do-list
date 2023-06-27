
var toDoList = [];
var doneList = [];

function tambahKegiatan() {
    var kegiatan = document.getElementById("inputAktifitas").value;
    var tanggal = document.getElementById("inputTanggal").value;

    var newKegiatan = {
        aktifitas: kegiatan,
        tanggal: tanggal,
        selesai: false
    };

    toDoList.push(newKegiatan);

    tampilkanKegiatan();
    }

function tampilkanKegiatan() {
    var list = document.getElementById("daftarKegiatan");
    list.innerHTML = "";

    for (var i = 0; i < toDoList.length; i++) {
        var kegiatan = toDoList[i];
        var status = kegiatan.selesai ? "completed" : "";

        var listItem = document.createElement("li");
        listItem.innerHTML = `
        <span class="${status}">${kegiatan.aktifitas} | ${kegiatan.tanggal} </span>
        <button onclick="tandaiSelesai(${i})"> <i class="fa-solid fa-check"></i> </button>
        `;
        list.appendChild(listItem);
    }
}

function tampilkanSelesai() {
    var list = document.getElementById("daftarSelesai");
    list.innerHTML = "";

    for (var i = 0; i < doneList.length; i++) {
        var kegiatan = doneList[i];

        var listItem = document.createElement("li");
        listItem.innerHTML = `
        <span>${kegiatan.aktifitas} | ${kegiatan.tanggal} </span>
        <button onclick="redoKegiatan(${i})"><i class="fa-solid fa-arrow-rotate-right"></i> </button>  
        <button onclick="hapusSelesai(${i})"><i class="fa-sharp fa-solid fa-trash"></i> </button>
            
        `;

        list.appendChild(listItem);
    }
}

function tandaiSelesai(index) {
    var kegiatan = toDoList.splice(index, 1)[0];
    kegiatan.selesai = true;
    doneList.push(kegiatan);
    tampilkanKegiatan();
    tampilkanSelesai();
    }


function redoKegiatan(index) {
    var kegiatan = doneList.splice(index, 1)[0];
    kegiatan.selesai = false;
    toDoList.push(kegiatan);
    tampilkanKegiatan();
    tampilkanSelesai();
}

function hapusSelesai(index) {
    doneList.splice(index, 1);
    tampilkanSelesai();
}


function hapusKegiatan(index) {
    toDoList.splice(index, 1);
    tampilkanKegiatan();
    }

tampilkanKegiatan();
tampilkanSelesai();
