let ITmixedChart = null;
let logisticmixedChart = null;
let gfdmixedChart = null;
let healthcareSalaryChart = null;
let socialMediaChart = null;
function createChart() {
    ITmixedChart = new Chart(document.getElementById("IT_CHART").getContext("2d"), {
        type: 'bar',
        data: {
            datasets: [{
                label: "Trung bình lương của các lĩnh vực trong ngành CNTT(tính theo VNĐ)",
                data: [37508333, 41675000, '50842857', '34600000', '31700000', '38300000', '38466666', '37750000']
            }],
            labels: ['Phần Mềm', 'Quản lý sản phẩm', 'Quản lý & Tư vấn', 'Thiết kế', 'Thử Nghiệm', ' Điện toán đám mây, Hạ tầng & An ninh', 'Phân tích dữ liệu', 'AI & Blockchain']
        },

        options: {
            animation: {
                delay: 1500,
                easing: 'easeOutBounce'
            }
        }


    })

    logisticmixedChart = new Chart(document.getElementById("LOGISTIC_CHART").getContext("2d"), {
        type: 'bar',
        data: {
            datasets: [{
                label: "Trung bình lương của các lĩnh vực trong ngành logistic(VNĐ)",
                data: ['11022150','72964606','18336389','41879093','5612662']
            }],
            labels: ['Mức tốt nghiệp', 'Giám đốc và cấp cao hơn', 'Nhân viên', 'Trường phòng', 'Thực tập sinh/sinh viên']
        },

        options: {
            animation: {
                delay: 1500,
                easing: 'easeOutBounce'
            }
        }


    })


    gfdmixedChart = new Chart(document.getElementById("GRAPHIC_DESIGNER_CHART").getContext("2d"), {
        type: 'bar',
        data: {
            datasets: [{
                label: "Trung bình lương của các lĩnh vực trong ngành thiết kế đồ họa(VNĐ)",
                data: ['16539961','17176113','18660468']
            }],
            labels: ['Nhà thiết kế đồ họa','Giảng viên thiết kế đồ họa','Chuyên viên thiết kế đồ họa']
        },

        options: {
            animation: {
                delay: 1500,
                easing: 'easeOutBounce'
            }
        }
    })



     healthcareSalaryChart = new Chart(document.getElementById("HEALTH_CARE_CHART").getContext("2d"), {
        type: 'bar',
        data: {
            labels: [
                "Chuyên viên Dinh dưỡng cao cấp",
                "Nhà cung cấp dịch vụ y tế cao cấp",
                "Bác sĩ Dị ứng",
                "Trợ lý Bác sĩ Giải phẫu bệnh",
                "Chuyên gia Sức khỏe Hành vi",
                "Chuyên gia Siêu âm Tim mạch"
            ],
            datasets: [{
                label: "Trung bình lương của các lĩnh vực trong  ngành y tế - dược (VNĐ)",
                data: [
                    23900000, 23500000, 33800000, 23900000, 20100000, 19900000
                ],
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 2000,
                easing: 'easeOutBounce'
            }
           
        }
    });


    socialMediaChart = new Chart(document.getElementById("SOCIAL_MEDIA_CHART").getContext("2d"), {
        type: 'bar',
        data: {
            datasets: [{
                label: "Trung bình lương của các lĩnh vực trong ngành Marketing & Truyền thông  (VNĐ)",
                data: [
                    '13412803', // Social media specialist ($53,006)
                    '16174042', // Social media strategist ($63,883)
                    '17414175', // Digital marketer ($68,850)
                    '13355632', // Social media analyst ($52,806)
                    '14098203'  // Social media manager ($55,724)
                ]
            }],
            labels: [
                'Chuyên viên Truyền thông Xã hội',
                'Chiến lược gia Truyền thông Xã hội',
                'Chuyên viên Tiếp thị Kỹ thuật số',
                'Nhà phân tích Truyền thông Xã hội',
                'Quản lý Truyền thông Xã hội'
            ]
        },
    
        options: {
            animation: {
                delay: 1500,
                easing: 'easeOutBounce'
            },
        }
    });


}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((Entry) => {
        console.log(Entry)
        if (Entry.isIntersecting) {
            Entry.target.classList.add("show");
            if (Entry.target.className == "hidden chart show") {
                createChart();
            }
        } else {
            if (Entry.target.className != "hidden chart show") {
                Entry.target.classList.remove("show");
            }
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));







