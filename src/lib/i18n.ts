export type Lang = 'el' | 'en';

export const translations = {
  el: {
    nav: {
      home: 'Αρχική',
      boat: 'Το Σκάφος',
      trips: 'Εκδρομές',
      share: 'Boat Share',
      blog: 'Άρθρα',
      contact: 'Επικοινωνία',
      book: 'Κράτηση'
    },
    hero: {
      title: 'SkiPartner',
      subtitle: 'Private Yacht Share Experience',
      yacht: 'THEMIS IV',
      tagline: 'Μοιραστείτε τα έξοδα, όχι το όνειρο',
      cta: 'Δείτε τις Διαθεσιμότητες',
      secondary: 'Μάθετε Περισσότερα'
    },
    intro: {
      title: 'Καλώς ήρθατε στο SkiPartner',
      p1: 'Είμαι ο Captain Haris και σας προσκαλώ σε μια μοναδική εμπειρία ιδιωτικού yachting στο Αιγαίο. Με το THEMIS IV, ένα πολυτελές σκάφος 13.90μ, προσφέρω την ευκαιρία να ζήσετε τις διακοπές των ονείρων σας μοιράζοντας μόνο τα πραγματικά έξοδα.',
      p2: 'Δεν είναι charter. Δεν είναι επιχείρηση. Είναι μια κοινότητα ανθρώπων που αγαπούν τη θάλασσα και θέλουν να την απολαύσουν με τον πιο αυθεντικό τρόπο.',
      features: [
        '2 επισκέπτες για πολυήμερες (3-7 ημέρες)',
        'Έως 6 επισκέπτες για ημερήσιες',
        'Όλα συμπεριλαμβάνονται στα έξοδα',
        'Captain με 20+ χρόνια εμπειρία'
      ]
    },
    boat: {
      title: 'THEMIS IV',
      subtitle: 'Το σπίτι σας στη θάλασσα',
      specs: 'Τεχνικά Χαρακτηριστικά',
      specList: {
        length: 'Μήκος',
        beam: 'Πλάτος',
        engines: 'Κινητήρες',
        speed: 'Μέγιστη Ταχύτητα',
        consumption: 'Κατανάλωση',
        cabins: 'Καμπίνες',
        bathrooms: 'Μπάνια',
        guests: 'Επισκέπτες'
      },
      amenities: 'Παροχές',
      amenitiesList: [
        'Κλιματισμός σε όλους τους χώρους',
        'Γεννήτρια 7kW',
        'Αφαλατωτής 60L/h',
        'Teak deck',
        'BBQ & Wet bar',
        'Φουσκωτό tender 3.2μ',
        'Snorkeling equipment',
        'WiFi & Sound system',
        'Πλήρως εξοπλισμένη κουζίνα'
      ]
    },
    trips: {
      title: 'Οι Εκδρομές μας',
      multi: {
        title: 'Πολυήμερες Κρουαζιέρες',
        duration: '3-7 ημέρες',
        guests: '2 επισκέπτες',
        desc: 'Εξερευνήστε τα κρυμμένα διαμάντια του Αιγαίου. Σαρωνικός, Κυκλάδες, Αργοσαρωνικός - εσείς επιλέγετε τον προορισμό, εμείς φροντίζουμε για όλα τα υπόλοιπα.',
        includes: ['Διαμονή στο σκάφος', 'Καύσιμα', 'Λιμενικά τέλη', 'Νερό & Ρεύμα', 'Captain & πλήρωμα']
      },
      day: {
        title: 'Ημερήσιες Εκδρομές',
        duration: '8-10 ώρες',
        guests: 'Έως 6 επισκέπτες',
        desc: 'Ιδανική επιλογή για οικογένειες ή παρέες. Κολύμπι σε κρυφούς όρμους, BBQ πάνω στο σκάφος, ηλιοβασίλεμα στη θάλασσα.',
        includes: ['Καύσιμα', 'Ποτά & σνακ', 'Snorkeling gear', 'Captain']
      }
    },
    share: {
      title: 'Τι είναι το Boat Share;',
      subtitle: 'Μοιραζόμαστε τα έξοδα, όχι το κέρδος',
      p1: 'Το SkiPartner δεν είναι εταιρεία charter. Είναι μια ιδιωτική πρωτοβουλία όπου μοιραζόμαστε τα πραγματικά έξοδα λειτουργίας του σκάφους.',
      p2: 'Εσείς πληρώνετε μόνο το μερίδιό σας σε καύσιμα, λιμενικά, και αναλώσιμα. Ο Captain Haris δεν έχει κέρδος - απλά μοιράζεται το πάθος του για τη θάλασσα.',
      how: 'Πώς λειτουργεί',
      steps: [
        'Επικοινωνείτε για διαθεσιμότητα',
        'Συμφωνούμε ημερομηνίες & διαδρομή',
        'Υπογράφουμε απλή συμφωνία boat share',
        'Μοιραζόμαστε τα έξοδα στο τέλος'
      ],
      transparent: 'Πλήρης Διαφάνεια',
      transparentText: 'Λαμβάνετε αναλυτική κατάσταση όλων των εξόδων με αποδείξεις.'
    },
    blog: {
      title: 'Άρθρα & Νέα',
      subtitle: 'Ιστορίες από τη θάλασσα',
      readMore: 'Διαβάστε περισσότερα',
      newPost: 'Νέο Άρθρο',
      manage: 'Διαχείριση Άρθρων'
    },
    contact: {
      title: 'Επικοινωνία & Κρατήσεις',
      captain: 'Captain Haris',
      phone: 'Τηλέφωνο',
      whatsapp: 'WhatsApp',
      email: 'Email',
      form: {
        name: 'Ονοματεπώνυμο',
        phone: 'Τηλέφωνο',
        email: 'Email (προαιρετικό)',
        dates: 'Επιθυμητές Ημερομηνίες',
        guests: 'Αριθμός Ατόμων',
        type: 'Τύπος Εκδρομής',
        message: 'Μήνυμα',
        multi: 'Πολυήμερη',
        day: 'Ημερήσια',
        send: 'Αποστολή',
        sending: 'Αποστολή...'
      },
      success: 'Το μήνυμά σας εστάλη! Θα επικοινωνήσουμε σύντομα.'
    },
    footer: {
      rights: 'Όλα τα δικαιώματα διατηρούνται',
      made: 'Κατασκευή με αγάπη για τη θάλασσα'
    }
  },
  en: {
    nav: {
      home: 'Home',
      boat: 'The Yacht',
      trips: 'Trips',
      share: 'Boat Share',
      blog: 'Articles',
      contact: 'Contact',
      book: 'Book Now'
    },
    hero: {
      title: 'SkiPartner',
      subtitle: 'Private Yacht Share Experience',
      yacht: 'THEMIS IV',
      tagline: 'Share the costs, not the dream',
      cta: 'Check Availability',
      secondary: 'Learn More'
    },
    intro: {
      title: 'Welcome to SkiPartner',
      p1: "I'm Captain Haris and I invite you to a unique private yachting experience in the Aegean Sea. With THEMIS IV, a luxurious 13.90m yacht, I offer the opportunity to live your dream vacation by sharing only the actual expenses.",
      p2: "This is not a charter. Not a business. It's a community of people who love the sea and want to enjoy it in the most authentic way.",
      features: [
        '2 guests for multi-day (3-7 days)',
        'Up to 6 guests for day trips',
        'All inclusive in shared costs',
        'Captain with 20+ years experience'
      ]
    },
    boat: {
      title: 'THEMIS IV',
      subtitle: 'Your home at sea',
      specs: 'Technical Specifications',
      specList: {
        length: 'Length',
        beam: 'Beam',
        engines: 'Engines',
        speed: 'Max Speed',
        consumption: 'Consumption',
        cabins: 'Cabins',
        bathrooms: 'Bathrooms',
        guests: 'Guests'
      },
      amenities: 'Amenities',
      amenitiesList: [
        'Air conditioning throughout',
        '7kW Generator',
        'Watermaker 60L/h',
        'Teak deck',
        'BBQ & Wet bar',
        '3.2m tender',
        'Snorkeling equipment',
        'WiFi & Sound system',
        'Fully equipped galley'
      ]
    },
    trips: {
      title: 'Our Trips',
      multi: {
        title: 'Multi-Day Cruises',
        duration: '3-7 days',
        guests: '2 guests',
        desc: 'Explore the hidden gems of the Aegean. Saronic, Cyclades, Argo-Saronic - you choose the destination, we take care of everything else.',
        includes: ['Accommodation on board', 'Fuel', 'Marina fees', 'Water & Electricity', 'Captain & crew']
      },
      day: {
        title: 'Day Trips',
        duration: '8-10 hours',
        guests: 'Up to 6 guests',
        desc: 'Perfect for families or groups. Swim in hidden coves, BBQ on board, sunset at sea.',
        includes: ['Fuel', 'Drinks & snacks', 'Snorkeling gear', 'Captain']
      }
    },
    share: {
      title: 'What is Boat Share?',
      subtitle: 'We share costs, not profit',
      p1: "SkiPartner is not a charter company. It's a private initiative where we share the actual operating costs of the yacht.",
      p2: 'You only pay your share of fuel, marina fees, and consumables. Captain Haris makes no profit - he simply shares his passion for the sea.',
      how: 'How it works',
      steps: [
        'Contact us for availability',
        'Agree on dates & route',
        'Sign simple boat share agreement',
        'Share costs at the end'
      ],
      transparent: 'Full Transparency',
      transparentText: 'You receive detailed breakdown of all expenses with receipts.'
    },
    blog: {
      title: 'Articles & News',
      subtitle: 'Stories from the sea',
      readMore: 'Read more',
      newPost: 'New Article',
      manage: 'Manage Articles'
    },
    contact: {
      title: 'Contact & Bookings',
      captain: 'Captain Haris',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      email: 'Email',
      form: {
        name: 'Full Name',
        phone: 'Phone',
        email: 'Email (optional)',
        dates: 'Preferred Dates',
        guests: 'Number of Guests',
        type: 'Trip Type',
        message: 'Message',
        multi: 'Multi-day',
        day: 'Day trip',
        send: 'Send',
        sending: 'Sending...'
      },
      success: 'Your message has been sent! We will contact you soon.'
    },
    footer: {
      rights: 'All rights reserved',
      made: 'Built with love for the sea'
    }
  }
};

export const useTranslation = (lang: Lang) => translations[lang];
