document.addEventListener('DOMContentLoaded', () => {
    // Translations Configuration
    const translations = {
        en: {
            nav: {
                about: "About",
                experience: "Experience",
                skills: "Skills",
                education: "Education",
                contact: "Contact"
            },
            hero: {
                role: "Aircraft Maintenance Technician <span class=\"accent\">&</span> Computer Programming Student",
                desc: "",
                contact: "Get in Touch",
                work: "View Work"
            },
            about: {
                title: "About Me",
                p1: "I am a passionate and detail-oriented professional with a unique blend of expertise in <strong>Aircraft Maintenance</strong> and <strong>Computer Programming</strong>.",
                p2: "Currently pursuing an Associate Degree in Computer Programming at Fırat Üniversitesi, I bring hands-on experience from world-class aviation companies like <strong>Pratt & Whitney (Turkish Engine Center)</strong>, Boeing, and Airbus. My goal is to leverage my technical skills in Python, C++, and aviation mechanics to solve complex problems and drive innovation.",
                stats: {
                    aviation: "Aviation",
                    aviation_desc: "Maintenance & Disassembly",
                    programming: "Programming",
                    design: "Design",
                    design_desc: "AutoCAD, 3D Design"
                }
            },
            experience: {
                title: "Experience",
                pw_student: {
                    title: "Intern Student",
                    desc: "Specialized in the Module Disassembly Department. Gained hands-on experience with turbine engine components and maintenance procedures in Istanbul, Turkey."
                },
                pw_intern: {
                    title: "Intern",
                    desc: "Summer internship program focusing on aviation maintenance protocols and safety standards."
                },
                skunkworks: {
                    title: "Intern",
                    desc: "Remote/Hybrid internship engaging with advanced projects and methodologies."
                },
                boeing: {
                    title: "Intern",
                    desc: "Gained exposure to large-scale aerospace operations and manufacturing support (Hybrid/France)."
                },
                airbus: {
                    title: "Intern",
                    desc: "Initial exposure to the aviation industry working with a global leader in aeronautics (Hybrid/France)."
                }
            },
            skills: {
                title: "Technical Proficiency",
                prog_os: "<i class=\"fas fa-laptop-code\"></i> Programming & OS",
                comp_prog: "Computer Programming",
                eng_design: "<i class=\"fas fa-tools\"></i> Engineering & Design",
                aircraft_maint: "Aircraft Maintenance",
                media: "<i class=\"fas fa-photo-video\"></i> Media & Tools",
                office: "Office Tools"
            },
            education: {
                title: "Education",
                firat: { degree: "Associate Degree, Computer Programming" },
                sabiha: { degree: "Aircraft Maintenance Technician" }
            },
            contact: {
                title: "Get in Touch",
                desc: "Interested in collaboration or have a question? Feel free to reach out."
            }
        },
        tr: {
            nav: {
                about: "Hakkımda",
                experience: "Deneyim",
                skills: "Yetenekler",
                education: "Eğitim",
                contact: "İletişim"
            },
            hero: {
                role: "Uçak Bakım Teknisyeni <span class=\"accent\">&</span> Bilgisayar Programcılığı Öğrencisi",
                desc: "",
                contact: "İletişime Geç",
                work: "Çalışmalarımı Gör"
            },
            about: {
                title: "Hakkımda",
                p1: "<strong>Uçak Bakımı</strong> ve <strong>Bilgisayar Programcılığı</strong> konularında benzersiz bir uzmanlık karışımına sahip, tutkulu ve detay odaklı bir profesyonelim.",
                p2: "Şu anda Fırat Üniversitesi'nde Bilgisayar Programcılığı Önlisans eğitimime devam ediyorum. <strong>Pratt & Whitney (Turkish Engine Center)</strong>, Boeing ve Airbus gibi dünya standartlarında havacılık şirketlerinden edindiğim uygulamalı deneyimimi beraberimde getiriyorum. Amacım, Python, C++ ve havacılık mekaniği konusundaki teknik becerilerimi karmaşık problemleri çözmek ve inovasyonu yönlendirmek için kullanmak.",
                stats: {
                    aviation: "Havacılık",
                    aviation_desc: "Bakım & Söküm",
                    programming: "Programlama",
                    design: "Tasarım",
                    design_desc: "AutoCAD, 3D Tasarım"
                }
            },
            experience: {
                title: "Deneyim",
                pw_student: {
                    title: "Stajyer Öğrenci",
                    desc: "Modül Söküm Departmanında uzmanlaştım. İstanbul, Türkiye'de türbin motoru bileşenleri ve bakım prosedürleri konusunda uygulamalı deneyim kazandım."
                },
                pw_intern: {
                    title: "Stajyer",
                    desc: "Havacılık bakım protokolleri ve güvenlik standartlarına odaklanan yaz staj programı."
                },
                skunkworks: {
                    title: "Stajyer",
                    desc: "İleri düzey projeler ve metodolojilerle ilgilenen Uzaktan/Hibrit staj."
                },
                boeing: {
                    title: "Stajyer",
                    desc: "Büyük ölçekli havacılık operasyonları ve üretim desteğine maruz kalma (Hibrit/Fransa)."
                },
                airbus: {
                    title: "Stajyer",
                    desc: "Havacılıkta dünya lideri bir şirketle çalışarak sektöre ilk adımı atma (Hibrit/Fransa)."
                }
            },
            skills: {
                title: "Teknik Yetkinlikler",
                prog_os: "<i class=\"fas fa-laptop-code\"></i> Programlama & OS",
                comp_prog: "Bilgisayar Programcılığı",
                eng_design: "<i class=\"fas fa-tools\"></i> Mühendislik & Tasarım",
                aircraft_maint: "Uçak Bakımı",
                media: "<i class=\"fas fa-photo-video\"></i> Medya & Araçlar",
                office: "Ofis Araçları"
            },
            education: {
                title: "Eğitim",
                firat: { degree: "Önlisans, Bilgisayar Programcılığı" },
                sabiha: { degree: "Uçak Bakım Teknisyeni" }
            },
            contact: {
                title: "İletişim",
                desc: "İşbirliği yapmak mı istiyorsunuz veya bir sorunuz mu var? Ulaşmaktan çekinmeyin."
            }
        }
    };

    // --- Language Switcher ---
    window.setLanguage = function (lang) {
        // Save preference
        localStorage.setItem('language', lang);

        // Update active class on switcher
        document.querySelectorAll('.lang-switch span').forEach(span => {
            span.classList.remove('active');
            if (span.innerText.toLowerCase() === lang.toUpperCase()) {
                span.classList.add('active');
            }
        });

        // Loop through all data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const keys = key.split('.');

            let translation = translations[lang];
            keys.forEach(k => {
                if (translation) translation = translation[k];
            });

            if (translation) {
                el.innerHTML = translation;
            }
        });
    };

    // Load saved language or default to en
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);


    // --- Theme Switcher ---
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        if (theme === 'light') {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }

    // Toggle click event
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);


    // --- Existing Animations (Cursor, etc) ---

    // Custom Cursor
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    window.addEventListener('mousemove', function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Hover effects for cursor
    const interactiveElements = document.querySelectorAll('a, button, .btn, .lang-switch span');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '60px';
            cursorOutline.style.height = '60px';
            cursorOutline.style.borderColor = 'var(--primary-color)';
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorOutline.style.borderColor = 'var(--primary-color)'; // Use var
        });
    });

    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // Toggle mobile menu logic needs update for flex vs display none
        // We'll use a class toggle for cleaner CSS control if possible, 
        // but keeping inline styles compatible with previous code:
        if (navLinks.style.display === 'flex' && navLinks.style.flexDirection === 'column') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.right = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'var(--nav-bg)';
            navLinks.style.padding = '2rem';
            navLinks.style.alignItems = 'center';
            navLinks.style.zIndex = '999';
            navLinks.style.borderBottom = '1px solid var(--border-color)';
        }
    });

    // Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        observer.observe(item);
    });
});
