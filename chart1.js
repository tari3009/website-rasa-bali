document.addEventListener('DOMContentLoaded', function() {
    // Contoh data bulanan untuk pembeli, makanan, dan minuman
    const monthlyData = [
        { bulan: 'Jan', pembeli: 5, makanan: 10, minuman: 5 },
        { bulan: 'Feb', pembeli: 7, makanan: 15, minuman: 10 },
        { bulan: 'Mar', pembeli: 8, makanan: 20, minuman: 15 },
        { bulan: 'Apr', pembeli: 6, makanan: 12, minuman: 8 },
        { bulan: 'Mei', pembeli: 9, makanan: 18, minuman: 12 },
        { bulan: 'Jun', pembeli: 10, makanan: 25, minuman: 18 },
        { bulan: 'Jul', pembeli: 11, makanan: 22, minuman: 20 },
        { bulan: 'Agu', pembeli: 12, makanan: 30, minuman: 25 },
        { bulan: 'Sep', pembeli: 40, makanan: 55, minuman: 30 },
        { bulan: 'Okt', pembeli: 55, makanan: 45, minuman: 55 },
        { bulan: 'Nov', pembeli: 0, makanan: 0, minuman: 0 },
        { bulan: 'Des', pembeli: 0, makanan: 0, minuman: 0 },
    ];

    // Menghitung total per bulan
    const totalPembeli = monthlyData.map(data => data.pembeli);
    const totalMakanan = monthlyData.map(data => data.makanan);
    const totalMinuman = monthlyData.map(data => data.minuman);

    // Grafik Batang
    var ctxBar = document.getElementById('barchart').getContext('2d');
    var myBarChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: monthlyData.map(data => data.bulan), // Menggunakan bulan dari data
            datasets: [{
                label: 'Jumlah Pembeli',
                data: totalPembeli,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }, {
                label: 'Jumlah Makanan yang Dibeli',
                data: totalMakanan,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }, {
                label: 'Jumlah Minuman yang Dibeli',
                data: totalMinuman,
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});