document.addEventListener("DOMContentLoaded", () => {
   const kodamList = {
      "Macan Putih": "Penjaga yang kuat dan tangguh.",
      "Macan Kumbang": "Penjaga yang lincah dan gesit.",
      Naga: "Makhluk mitos yang bijaksana dan kuat.",
      "Jin Qorin": "Penjaga dari dunia lain yang misterius.",
      Ular: "Simbol kecerdikan dan fleksibilitas.",
      "Buaya Putih": "Penjaga yang memiliki kekuatan besar.",
      Ratu: "Penjaga yang memiliki kebijaksanaan dan keanggunan.",
      "Harimau Loreng": "Penjaga yang tangguh dan berani.",
      "Nenek Tua": "Penjaga yang penuh kebijaksanaan dan pengalaman.",
      "Singa Api": "Penjaga yang kuat dengan semangat berapi-api.",
      "Buto Ijo": "Penjaga yang memiliki kekuatan besar dan menakutkan.",
      "Wesi Kuning": "Penjaga yang kuat dan tak tergoyahkan.",
      "Singo Barong": "Penjaga yang kuat dan berwibawa.",
      "Keris Semar Mesem": "Penjaga dengan kekuatan magis.",
      "Idu Geni Sabdo Dadi": "Penjaga dengan kekuatan api.",
      "Garuda Emas": "Penjaga yang gagah dan perkasa.",
      "Kala Jengking": "Penjaga yang berbahaya dan penuh tipu daya.",
      "Geni Murcitro": "Penjaga dengan kekuatan api yang membara.",
      "Angin Puyuh": "Penjaga yang cepat dan mematikan.",
      "Mega Mendung": "Penjaga yang tenang dan bijaksana.",
      "Kumbang Jatu": "Penjaga yang kecil namun mematikan.",
      "Banteng Wulung": "Penjaga yang kuat dan berani.",
      "Kyai Sengklok": "Penjaga yang bijaksana dan sakti.",
      "Kyai Brojol": "Penjaga yang kuat dan tangguh.",
      "Dewi Lanjar": "Penjaga yang anggun dan penuh rahmat.",
      "Dewi Lara Kidul": "Penjaga yang kuat dan penuh misteri.",
      "Dewi Rengganis": "Penjaga yang cantik dan berwibawa.",
      "Dewi Kadenci": "Penjaga yang penuh kebijaksanaan.",
      "Dewi Sukesi": "Penjaga yang penuh kasih sayang.",
      "Jaran Goyang": "Penjaga yang kuat dan lincah.",
      "Jaran Sembrani": "Penjaga yang cepat dan kuat.",
      "Merak Ati": "Penjaga yang cantik dan anggun.",
      "Geni Murcahyo": "Penjaga dengan kekuatan api yang dahsyat.",
      "Geni Sabdo Jati": "Penjaga dengan kekuatan api yang membara.",
      "Pecel Lele": "Penjaga yang sederhana namun tangguh.",
      "Kulkas Rusak": "Penjaga yang aneh namun berharga.",
      "Lampu Tidur": "Penjaga yang tenang dan menenangkan.",
      "Tahu Bulat": "Penjaga yang penuh kejutan.",
      "Sate Padang": "Penjaga yang pedas dan bersemangat.",
      "Es Krim Meleleh": "Penjaga yang manis dan menyenangkan.",
      "Ayam Geprek": "Penjaga yang pedas dan penuh semangat.",
      "Tisu Basah": "Penjaga yang bersih dan menyegarkan.",
      "Sendal Jepit": "Penjaga yang fleksibel dan tahan banting.",
      "Tukang Parkir": "Penjaga yang selalu siap sedia.",
      "Bakso Urat": "Penjaga yang kenyal dan bertenaga.",
      "Gelas Pecah": "Penjaga yang rapuh namun tajam.",
      "Kopi Sachet": "Penjaga yang praktis dan memberi energi.",
      "Tukang Ojek Online": "Penjaga yang cepat dan mengenal jalan.",
      "Warteg 24 Jam": "Penjaga yang selalu ada saat dibutuhkan.",
      "Penjual Cilok": "Penjaga yang lincah dan mudah beradaptasi.",
      "Tukang Nasi Goreng": "Penjaga yang ahli dalam improvisasi.",
      "Kucing Oren": "Penjaga yang lucu namun galak.",
      "Bebek Goreng": "Penjaga yang renyah di luar, empuk di dalam.",
      "Kerupuk Melempem": "Penjaga yang tak terlihat namun selalu ada.",
      "Kutil Bapak": "Penjaga yang kecil namun gigih.",
      "Upil Membandel": "Penjaga yang sulit disingkirkan.",
      "Bau Ketek": "Penjaga yang kuat dan menyengat.",
      "Sembelit Akut": "Penjaga yang keras kepala.",
      "Ingus Beku": "Penjaga yang dingin dan lengket.",
      "Kuping Berdenging": "Penjaga yang selalu waspada.",
      "Kentut Basah": "Penjaga yang mengejutkan dan memalukan.",
      "Jempol Kaki": "Penjaga yang kuat namun sering tersandung.",
      "Komedo Bandel": "Penjaga yang kecil namun sulit dihilangkan.",
      "Tai Lalat": "Penjaga yang kecil namun mencolok.",
      "Bisul Bokong": "Penjaga yang menyakitkan namun perkasa.",
      "Ketiak Bau": "Penjaga yang kuat namun tidak disukai.",
      "Mendengkur Dahsyat": "Penjaga yang berisik namun pemberani.",
      "Bulu Hidung": "Penjaga yang kecil namun penting.",
      "Ketombe Membandel": "Penjaga yang gigih dan sulit dikalahkan.",
      "Kutu Loncat": "Penjaga yang kecil namun gesit.",
      "Jerawat Meradang": "Penjaga yang menyakitkan namun tangguh.",
      "Sariawan Akut": "Penjaga yang menyiksa namun gigih.",
      "Lidah Tergigit": "Penjaga yang ceroboh namun tangguh.",
      "Gigi Berlubang": "Penjaga yang rapuh namun menyakitkan.",
      "Kuntilanak Filosofis": "Penjaga yang suka bertanya tentang eksistensi.",
      "Pocong Eksistensialis": "Penjaga yang selalu mencari makna hidup.",
      "Genderuwo Nihilis": "Penjaga yang percaya ketiadaan makna.",
      "Tuyul Pragmatis": "Penjaga yang fokus pada hasil praktis.",
      "Wewe Gombel Stoik": "Penjaga yang tabah menghadapi cobaan.",
      "Sundel Bolong Hedonist": "Penjaga yang mengejar kesenangan.",
      "Banaspati Skeptis": "Penjaga yang selalu mempertanyakan segalanya.",
      "Leak Bali Determinis": "Penjaga yang percaya takdir sudah ditentukan.",
      "Kuyang Relativis": "Penjaga yang percaya kebenaran itu relatif.",
      "Palasik Empiris": "Penjaga yang hanya percaya pada pengalaman indrawi.",
      "Jenglot Rasionalis": "Penjaga yang mengutamakan logika dan akal.",
      "Begu Ganjang Fenomenologis": "Penjaga yang fokus pada pengalaman sadar.",
      "Pontianak Eksistensial":
         "Penjaga yang selalu gelisah akan keberadaannya.",
      "Momok Epistemologis": "Penjaga yang selalu mencari sumber pengetahuan.",
      "Hantu Jeruk Purut Metafisis": "Penjaga yang mempertanyakan realitas.",
      "Setan Lampir Dialektis": "Penjaga yang suka berdebat dan berargumen.",
      "Demit Ontologis": "Penjaga yang mempertanyakan hakikat keberadaan.",
      "Jinn Hermeneutik": "Penjaga yang ahli menafsirkan teks-teks kuno.",
      "Siluman Ular Fenomenologis": "Penjaga yang mendalami esensi pengalaman.",
      "Hantu Kuburan Platonis": "Penjaga yang percaya pada dunia ide.",
      "Roh Halus Cartesian": "Penjaga yang selalu ragu dan berpikir.",
      "Dedemit Kantian": "Penjaga yang memegang teguh imperatif kategoris.",
      "Hantu Laut Aristotelian": "Penjaga yang mementingkan kebajikan.",
      "Mbah Dukun Nietzschean":
         "Penjaga yang menantang nilai-nilai tradisional.",
      "Setan Alas Foucauldian":
         "Penjaga yang mempertanyakan struktur kekuasaan.",
   };
   const nameInput = document.getElementById("name");
   const generateBtn = document.getElementById("generateBtn");
   const popup = document.getElementById("popup");
   const closePopup = document.getElementById("closePopup");
   const shareXBtn = document.getElementById("shareXBtn");
   const shareWhatsAppBtn = document.getElementById("shareWhatsAppBtn");
   const downloadBtn = document.getElementById("downloadBtn");
   const warning = document.getElementById("warning");
   const loading = document.getElementById("loading");

   const isValidName = (name) => /^[A-Za-z\s]+$/.test(name);

   const hideWarning = () => {
      warning.classList.toggle("hidden", isValidName(nameInput.value.trim()));
   };

   nameInput.addEventListener("input", hideWarning);

   const getRandomKhodam = () => {
      const keys = Object.keys(kodamList);
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      return { name: randomKey, description: kodamList[randomKey] };
   };

   const displayPopup = (name, kodam) => {
      const fullName = `${name}, Khodam Kamu adalah:`;
      document.getElementById("khodamName").textContent = fullName;
      document.getElementById("khodamMainName").textContent = kodam.name;
      document.getElementById("khodamDescription").textContent =
         kodam.description;
      document.getElementById("khodamStrength").textContent =
         Math.floor(Math.random() * 10) + 1;
      document.getElementById(
         "khodamDate"
      ).textContent = `Digenerate pada: ${new Date().toLocaleString()}`;
      document.getElementById(
         "khodamId"
      ).textContent = `ID Khodam: ${Math.random().toString(36).substr(2, 9)}`;
      popup.classList.remove("hidden");
   };

   const handleGenerateClick = async (event) => {
      event.preventDefault();
      const name = nameInput.value.trim();
      if (name === "") {
         warning.classList.remove("hidden");
         warning.textContent = "Nama tidak boleh kosong.";
      } else if (isValidName(name)) {
         warning.classList.add("hidden");
         loading.classList.remove("hidden");
         generateBtn.disabled = true;

         await new Promise((resolve) => setTimeout(resolve, 1000));

         const kodam = getRandomKhodam();
         displayPopup(name, kodam);
         nameInput.value = "";
         nameInput.placeholder = "Masukkan nama baru";

         loading.classList.add("hidden");
         generateBtn.disabled = false;
      } else {
         warning.classList.remove("hidden");
         warning.textContent = "Nama hanya boleh terdiri dari huruf.";
      }
   };

   generateBtn.addEventListener("click", handleGenerateClick);

   closePopup.addEventListener("click", () => {
      popup.classList.add("fade-out");

      popup.addEventListener(
         "transitionend",
         () => {
            popup.classList.add("hidden");

            popup.classList.remove("fade-out");
         },
         { once: true }
      );
   });

   const captureScreenshot = async () => {
      try {
         const popupElement = document.querySelector("#popup .popup-content");
         if (!popupElement) {
            throw new Error("Element not found.");
         }

         const originalBackdropFilter = popupElement.style.backdropFilter;
         popupElement.style.backdropFilter = "none";

         const scaleFactor = 3;

         const canvas = await html2canvas(popupElement, {
            backgroundColor: "#45474B",
            scale: scaleFactor,
            logging: true,
            allowTaint: true,
            useCORS: true,
            quality: 1.0,
         });

         popupElement.style.backdropFilter = originalBackdropFilter;

         return canvas.toDataURL("image/png");
      } catch (error) {
         console.error("Error capturing screenshot:", error);
         return null;
      }
   };

   const indexUrl = window.location.href;
   const shareX = async () => {
      const shareText = `${document.getElementById("khodamName").textContent} ${
         document.getElementById("khodamDescription").textContent
      }\n${indexUrl}`;
      const xUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(
         shareText
      )}`;
      window.open(xUrl, "_blank");
   };

   const shareWhatsApp = () => {
      const shareText = `${document.getElementById("khodamName").textContent} ${
         document.getElementById("khodamDescription").textContent
      }\n${indexUrl}`;
      const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(
         shareText
      )}`;
      window.open(whatsappUrl, "_blank");
   };

   const downloadImage = async () => {
      try {
         const screenshot = await captureScreenshot();
         if (!screenshot) {
            throw new Error("Failed to capture screenshot");
         }
         const downloadLink = document.createElement("a");
         downloadLink.href = screenshot;
         downloadLink.download = "khodam.png";
         document.body.appendChild(downloadLink);
         downloadLink.click();
         document.body.removeChild(downloadLink);
      } catch (error) {
         console.error("Error downloading image:", error);
         alert("Failed to download image. Please try again.");
      }
   };

   shareXBtn.addEventListener("click", shareX);
   shareWhatsAppBtn.addEventListener("click", shareWhatsApp);
   downloadBtn.addEventListener("click", downloadImage);
});
