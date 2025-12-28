// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Toggle the dark mode icon
    const icon = document.getElementById('darkModeIcon');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        icon.innerHTML = '⏾'; // Half Moon icon for Dark mode
    } else {
        localStorage.setItem('darkMode', 'disabled');
        icon.innerHTML = '&#9728;'; // Full Sun icon for Light mode
    }
}

// Check if dark mode was previously enabled
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.getElementById('darkModeIcon').innerHTML = '⏾'; // Half Moon icon for Dark mode
} else {
    document.getElementById('darkModeIcon').innerHTML = '&#9728;'; // Full Sun icon for Light mode
}

// Translations are defined below, no need for external JSON files

const translations = {
    en: {
        mainTitle: "News Flow",
        languageLabel: "Choose Language:",
        home: "Home",
        aboutUs: "About Us",
        missionTitle: "Our Mission",
        missionContent: "At News Flow, our mission is to deliver accurate and timely news...",
        visionTitle: "Our Vision",
        visionContent: "We envision a world where everyone has access to reliable news...",
        valuesTitle: "Our Values",
        integrityValue: "<strong>Integrity:</strong> We adhere to the highest standards...",
        transparencyValue: "<strong>Transparency:</strong> We are committed to openness...",
        innovationValue: "<strong>Innovation:</strong> We embrace new technologies...",
        communityValue: "<strong>Community:</strong> We engage with our readers...",
        teamTitle: "Meet Our Team",
        teamMember1: "K. Pranay",
        teamMember1Desc: "Focuses on organizing and presenting news in a clear way.",
        teamMember2: "H. Uday",
        teamMember2Desc: "Handles the technical aspects, ensuring the site runs smoothly and looks great.",
        teamMember3: "B. Hasini",
        teamMember3Desc: "Curates relevant content that matters to our audience.",
        footerText: "&copy; 2024 News Flow. All rights reserved."
    },
    hi: {
        mainTitle: "समाचार प्रवाह",
        languageLabel: "भाषा चुनें:",
        home: "मुख पृष्ठ",
        aboutUs: "हमारे बारे में",
        missionTitle: "हमारा मिशन",
        missionContent: "समाचार प्रवाह में, हमारा मिशन सटीक और समय पर समाचार पहुंचाना है...",
        visionTitle: "हमारी दृष्टि",
        visionContent: "हम ऐसी दुनिया की कल्पना करते हैं जहां हर किसी के पास विश्वसनीय समाचार हों...",
        valuesTitle: "हमारे मूल्य",
        integrityValue: "<strong>ईमानदारी:</strong> हम सर्वोच्च मानकों का पालन करते हैं...",
        transparencyValue: "<strong>पारदर्शिता:</strong> हम खुलेपन के प्रति प्रतिबद्ध हैं...",
        innovationValue: "<strong>नवाचार:</strong> हम नई तकनीकों को अपनाते हैं...",
        communityValue: "<strong>समुदाय:</strong> हम अपने पाठकों के साथ जुड़ते हैं...",
        teamTitle: "हमारी टीम से मिलें",
        teamMember1: "के. प्रणय",
        teamMember1Desc: "समाचार को स्पष्ट तरीके से प्रस्तुत करने पर ध्यान केंद्रित करते हैं।",
        teamMember2: "एच. उदय",
        teamMember2Desc: "तकनीकी पहलुओं को संभालते हैं, जिससे साइट सुचारू रूप से चलती है।",
        teamMember3: "बी. हसीनी",
        teamMember3Desc: "हमारे दर्शकों के लिए प्रासंगिक सामग्री का चयन करते हैं।",
        footerText: "&copy; 2024 समाचार प्रवाह। सर्वाधिकार सुरक्षित।"
    },
    bn: {
        mainTitle: "সংবাদ প্রবাহ",
        languageLabel: "ভাষা নির্বাচন করুন:",
        home: "মূল পাতা",
        aboutUs: "আমাদের সম্পর্কে",
        missionTitle: "আমাদের লক্ষ্য",
        missionContent: "সংবাদ প্রবাহে, আমাদের লক্ষ্য সঠিক এবং সময়মত খবর প্রদান করা...",
        visionTitle: "আমাদের দৃষ্টি",
        visionContent: "আমরা এমন একটি পৃথিবীর কল্পনা করি যেখানে প্রত্যেকে নির্ভরযোগ্য খবর পায়...",
        valuesTitle: "আমাদের মূল্যবোধ",
        integrityValue: "<strong>সততা:</strong> আমরা সর্বোচ্চ মান অনুসরণ করি...",
        transparencyValue: "<strong>স্বচ্ছতা:</strong> আমরা খোলামেলাতা বজায় রাখতে প্রতিশ্রুতিবদ্ধ...",
        innovationValue: "<strong>উদ্ভাবন:</strong> আমরা নতুন প্রযুক্তি গ্রহণ করি...",
        communityValue: "<strong>সম্প্রদায়:</strong> আমরা আমাদের পাঠকদের সাথে জড়িত থাকি...",
        teamTitle: "আমাদের দল",
        teamMember1: "কে. প্রণয়",
        teamMember1Desc: "সংবাদ পরিষ্কারভাবে উপস্থাপন করতে মনোযোগ দেয়।",
        teamMember2: "এইচ. উদয়",
        teamMember2Desc: "সাইটটি সঠিকভাবে চালানোর প্রযুক্তিগত দিকগুলি পরিচালনা করেন।",
        teamMember3: "বি. হাসিনি",
        teamMember3Desc: "আমাদের দর্শকদের জন্য প্রাসঙ্গিক সামগ্রী তৈরি করেন।",
        footerText: "&copy; 2024 সংবাদ প্রবাহ। সমস্ত অধিকার সংরক্ষিত।"
    }
};

function changeLanguage() {
    const selectedLanguage = document.getElementById("languages").value;
    const lang = translations[selectedLanguage];

    document.getElementById("main-title").innerText = lang.mainTitle;
    document.getElementById("language-label").innerText = lang.languageLabel;
    document.getElementById("home").innerText = lang.home;
    document.getElementById("about-us").innerText = lang.aboutUs;
    document.getElementById("mission-title").innerText = lang.missionTitle;
    document.getElementById("mission-content").innerText = lang.missionContent;
    document.getElementById("vision-title").innerText = lang.visionTitle;
    document.getElementById("vision-content").innerText = lang.visionContent;
    document.getElementById("values-title").innerText = lang.valuesTitle;
    document.getElementById("integrity-value").innerHTML = lang.integrityValue;
    document.getElementById("transparency-value").innerHTML = lang.transparencyValue;
    document.getElementById("innovation-value").innerHTML = lang.innovationValue;
    document.getElementById("community-value").innerHTML = lang.communityValue;
    document.getElementById("team-title").innerText = lang.teamTitle;
    document.getElementById("team-member-1").innerText = lang.teamMember1;
    document.getElementById("team-member-1-desc").innerText = lang.teamMember1Desc;
    document.getElementById("team-member-2").innerText = lang.teamMember2;
    document.getElementById("team-member-2-desc").innerText = lang.teamMember2Desc;
    document.getElementById("team-member-3").innerText = lang.teamMember3;
    document.getElementById("team-member-3-desc").innerText = lang.teamMember3Desc;
    document.getElementById("footer-text").innerHTML = lang.footerText;
}