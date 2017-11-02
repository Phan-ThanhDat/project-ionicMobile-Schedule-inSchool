export class ClassesData {
  data = {
    "2017-05-01": {
      dayOfWeek: "Monday",
      0: null,
      1: {
        content: "<strong>Vappu</strong><br/>NELEKS13A NELEKS13B NINFOS12 NINFOS13 NINFOS14 NLIIBK13 NLIIBK14, TJ NLIIBK14, TL NSOSTK14 NSOSTS13 NSOSTS14 NTIETS13H NTIETS13P NTIETS13S",
        rowspan: 10
      },
      11: null
    },
    "2017-05-02": {
      dayOfWeek: "Tuesday",
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: {
        content: "<strong>Higher Education Studies and Working Life Skills 2</strong><br/>PINFOS16<br/>ICT SIGMA, auditorio C1039 (78)<br/><em>Skarli Poppy</em>",
        rowspan: 1
      },
      7: {
        content: "<strong>Topics on Applied Mathematics</strong><br/>PINFOS16<br/>ICT C1031 fys. demo<br/><em>Al-Bermanei Hazem</em>",
        rowspan: 2
      },
      9: null,
      10: null,
      11: null
    },
    "2017-05-03": {
      dayOfWeek: "Wednesday",
      0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null,  9: null, 10: null, 11: null
    },
    "2017-05-04": {
      dayOfWeek: "Thursday",
      0: null,
      1: {
        content: "<strong>Tuotekehitys Työskentely / Product Development</strong><br/>PINFOS16 PTIVIS16D PTIVIS16E<br/>ICT C2032 PBL/MJ (30) ICT C2033 PBL/MJ (30) ICT C2034 PBL/MJ (30) ICT B2043 PBL",
        rowspan: 6
      },
      7: {
        content: "<strong>Tuotekehitys Tutoriaali Lopetus / Product Development</strong><br/>PINFOS16 PTIVIS16D PTIVIS16E<br/>ICT DELTA, auditorio C1035 (100) ICT C2032 PBL/MJ (30) ICT C2033 PBL/MJ (30) ICT C2034 PBL/MJ (30) ICT B2043 PBL<br/><em>Mattila Leena, Skarli Poppy, Suhonen Mauri</em>",
        rowspan: 2
      },
      9: null, 10: null, 11: null
    },
    "2017-05-05": {
      dayOfWeek: "Friday",
      0: null, 1: null, 2: null,
      3: {
        content: "<strong>Topics on Applied Mathematics</strong><br/>PINFOS16<br/>ICT B2026 (49)<br/><em>Al-Bermanei Hazem</em>",
        rowspan: 2
      },
      5: null, 6: null, 7: null,  9: null, 10: null, 11: null
    },
    "2017-05-06": {
      dayOfWeek: "Saturday",
      0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null,  9: null, 10: null, 11: null
    },
    "2017-05-07": {
      dayOfWeek: "Sunday",
      0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null,  9: null, 10: null, 11: null
    }
  };

  timePeriods = ["07:15-08:00", "08:15-09:00", "09:15-10:00", "10:15-11:00", "11:15-12:00", "12:15-13:00", "13:15-14:00", "14:15-15:00", "15:15-16:00", "16:15-17:00", "17:15-18:00", "18:15-19:00"];
  timePeriodsBreak = ["07:15<br/>08:00", "08:15<br/>09:00", "09:15<br/>10:00", "10:15<br/>11:00", "11:15<br/>12:00", "12:15<br/>13:00", "13:15<br/>14:00", "14:15<br/>15:00", "15:15<br/>16:00", "16:15<br/>17:00", "17:15<br/>18:00", "18:15<br/>19:00"];

  getData(property) {
    if (typeof this.data[property] === "undefined") {
      return {
        dayOfWeek: "undefined",
        0: {
          content: "For prototype,<br/>this data is not available.",
          rowspan: 12
        }
      }
    }
    return this.data[property];
  }

  getTimePeriod(index) {
    return this.timePeriods[index];
  }

  getTimePeriodBreak(index) {
    return this.timePeriodsBreak[index];
  }

}
