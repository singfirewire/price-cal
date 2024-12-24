const priceA = document.getElementById('priceA');
const quantityA = document.getElementById('quantityA');
const priceB = document.getElementById('priceB');
const quantityB = document.getElementById('quantityB');
const result = document.getElementById('result');
const clearBtn = document.getElementById('clearBtn');

function comparePrice() {
    const pricePerUnitA = priceA.value / quantityA.value;
    const pricePerUnitB = priceB.value / quantityB.value;

    if (pricePerUnitA < pricePerUnitB) {
        result.textContent = "สินค้า A คุ้มค่ากว่า";
    } else if (pricePerUnitA > pricePerUnitB) {
        result.textContent = "สินค้า B คุ้มค่ากว่า";
    } else {
        result.textContent = "สินค้า A และ B คุ้มค่าเท่ากัน";
    }
}

// เรียกใช้ฟังก์ชัน comparePrice ทุกครั้งที่ค่าใน input เปลี่ยนแปลง
priceA.addEventListener('input', comparePrice);
quantityA.addEventListener('input', comparePrice);
priceB.addEventListener('input', comparePrice);
quantityB.addEventListener('input', comparePrice);

clearBtn.addEventListener('click', () => {
    priceA.value = 0;
    quantityA.value = 1;
    priceB.value = 0;
    quantityB.value = 1;
    result.textContent = "กรุณากรอกข้อมูลให้ครบทั้งสองสินค้า";
});

// เก็บค่าข้อมูลล่าสุดใน localStorage
function saveData() {
    localStorage.setItem('priceA', priceA.value);
    localStorage.setItem('quantityA', quantityA.value);
    localStorage.setItem('priceB', priceB.value);
    localStorage.setItem('quantityB', quantityB.value);
}

// โหลดค่าข้อมูลล่าสุดเมื่อเปิดหน้าเว็บ
function loadData() {
    priceA.value = localStorage.getItem('priceA') || 0;
    quantityA.value = localStorage.getItem('quantityA') || 1;
    priceB.value = localStorage.getItem('priceB') || 0;
    quantityB.value = localStorage.getItem('quantityB') || 1;
    comparePrice(); // คำนวณผลลัพธ์ทันทีเมื่อโหลดข้อมูล
}

// เรียกใช้ฟังก์ชัน saveData ทุกครั้งที่ค่าใน input เปลี่ยนแปลง
priceA.addEventListener('input', saveData);
quantityA.addEventListener('input', saveData);
priceB.addEventListener('input', saveData);
quantityB.addEventListener('input', saveData);

// โหลดข้อมูลเมื่อเปิดหน้าเว็บ
loadData();
