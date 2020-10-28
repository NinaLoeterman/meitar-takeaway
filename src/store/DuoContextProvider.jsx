import React, { createContext } from "react";

export const repertiore = {
  duo1: {
    firstCourse: {
      title: "ראשונה",
      firstOption: "גריד - ״בוקר״ מתוך פר גינט",
      secondOption: "צ׳ייקובסקי - ריקוז פיית הסוכר",
      thirdOption: "טלמן - דואט קאנוני",
    },
    mainCourse: {
      title: "עיקרית",
      firstOption: "דביסי - ״סירינקס״",
      secondOption: "״סטרוונסקי - קטע לקלרינט סולו״",
      thirdOption: "״באך - אריה על מיתר סול״",
    },
    dessert: {
      title: "קינוח",
      firstOption: "״בראש השנה״",
      secondOption: "״שנה טובה״",
    },
  },
  duo2: {
    firstCourse: {
      title: "ראשונה",
      firstOption: "יוני רכטר - ״איך שיר נולד״",
      secondOption: "לחן עממי ספרדי-יהודי ״התרגעות״",
      thirdOption: "״קנטטת החתונה״ באך - אריה מתוך",
    },
    mainCourse: {
      title: "עיקרית",
      firstOption: "שיר בפורטוגזית",
      secondOption: "״הספר מסביליה״ רוסיני - אריה מתוך ",
      thirdOption: "״כרמן״ ביזה - הבנרה מתוך ",
    },
    dessert: {
      title: "קינוח",
      firstOption: "״חיוכים״ חוה אלברשטיין - ",
      secondOption: "״נו בייבי״ אחינועם ניני / באך - ",
    },
  },
};

export const RepertioreContext = createContext(repertiore.duo1);
