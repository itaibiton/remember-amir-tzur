import MarkerSvg from "@/public/market-svg";
import Image from "next/image";
import Link from "next/link";

const STATIC_CONTENT = [
  {
    title: '',
    content: `אתר זה מוקדש לזכרו של סרן אמיר צור, שנהרג ב-7 באוקטובר 2024 בלחימה בכפר עזה.
אמיר, בן לאסתר ויניב, אח לאיתן, תומר ועופרי, נולד ב-7 במאי 2000,וגדל בנופיו החקלאיים של עמק חפר. עם סיום לימודי התיכון שלו עברה המשפחה להתגורר בירושליםֿֿ. אמיר היה קצין לוחם בסיירת מטכ״ל, והיה בין הראשונים להתייצב בלחימה במחבלי הנוח׳בה שחדרו לקיבוץ כפר עזה.`
  },
  {
    title: 'אמיר צור - קווים לדמותו',
    content: `אמיר בלט בתכונות האופי הייחודיות שלו ורצונו לעזור ולהשפיע ככל שיכול היה. אמיר היה בן משפחה מסור, תלמיד מחונן, נגן על פסנתר, אלוף הארץ בריצת ניווט, מדריך טיולים, פרמדיק, קצין לוחם מוערך ובעיקר אדם שהצליח לנגוע בלב של כולנו.
במהלך השירות הצבאי בלט כלוחם מצטיין, אכפתי, אדיב וסקרן, קצין לוחם ופרמדיק מהמוכשרים ביחידה.`
  },
  {
    title: `שלא נצא בורים - הפרויקט`,
    content: `״שלא נצא בורים״ - צירוף מילים שאמיר בחר להשתמש בהן בכל הזדמנות שהיא:
אם בהמלך מסלול, בתום כל מסע קשה, בכל נקודת תצפית אליה הגיע או בתחילתו של עוד שבוע עמוס, ואפילו כטקסט מעשיר בידע על דלת השירותים. אמיר הקפיד להעשיר את עולמנו בידע הרחב שלו, ועל הדרך, ולו לרגע קט, אפשר לנו אתנחתא קלה ומחכימה מהשגרה התובענית.
`
  },
  {
    title: 'כיצד מנציחים?',
    content: `מטיילים, סורקים קוד, ומגלים עולם תוכן מרתק.
במהלך המלחמה חשבנו, חבריו לצוות, על האופן להנציח את אמיר, ובכך לאפשר צוהר קטן להיכרות עם האדם המיוחד שהיה. לאורכה של ישראל פזורות נקודות ציון משמעותיות הקשורות לאמיר.בכל אחת מהנקודות הללו ישנו מונומנט מוצנע המשתלב עם הנוף, ובתוכו מוטמע ברקוד קטן. סריקת הברקוד מובילה לאתר אינטרנט עשיר בתוכן - מידע מפורט מרחיב דעת על אותה נקודת ציון, ועל נקודות נוספות אחרות הפזורות בארץ. לדעתנו, אין דרך מעשירה וראויה יותר להכיר את אמיר ואת דרכו הייחודית, ולהוקיר את זכרו.
יהי זכרו נצור בליבנו לעד.`
  }
]

const EXTERNAL_LINKS = [
  {
    title: 'כמה דברים על אמיר מפיה של עופרי אחותו.',
    description: 'ראיון בכאן 11',
    link: 'https://x.com/kann_news/status/1746545317355348117'
  },
  {
    title: 'פרידה מעילוי, הקצין שתמיד היה ראשון, גם בלהסתער',
    description: 'כתבה בכאן 11',
    link: 'https://www.youtube.com/watch?v=DeiPPqIS-A0'
  },
  {
    title: 'בלוג שכתב אמיר במהלך האליפות הראשנה שלו באירופה',
    description: 'EYOC - European Youth Orienteering Championships',
    link: 'https://amirzur-o.blogspot.com/2016/12/eyoc-european-youth-orienteering.html?m=1'
  },
  {
    title: 'פודקסט על הלחימה בכפר עזה, יחד עם כפיר, אחד הלוחמים בכוח.',
    description: 'חמש אצבעות',
    link: 'https://www.youtube.com/watch?v=bPEV95KlDM8'
  },
  {
    title: 'דף ההנצחה של אמיר.',
    description: 'יזכור - אתר ההנצחה הלאומי',
    link: 'https://www.izkor.gov.il/%D7%90%D7%9E%D7%99%D7%A8%20%D7%A6%D7%95%D7%A8/en_2f2ff74b1b7545cb0b1e671c038c512a'
  },
  {
    title: '33 עצות לחיים טובים.',
    description: 'אמיר צור',
    link: 'https://s3.eu-central-1.amazonaws.com/dav.externalfiles.new/tikshoretmada/33+%D7%A2%D7%A6%D7%95%D7%AA+%D7%9C%D7%97%D7%99%D7%99%D7%9D+%D7%98%D7%95%D7%91%D7%99%D7%9D+%D7%A9%D7%9C+%D7%90.+%D7%A6%D7%95%D7%A8+(1)+(2).pdf'
  },
  {
    title: 'שיחה מלב אל לב עם עופרי ואיתן, אחיו של אמיר.',
    description: 'ראיון עם חנוך דאום ורותם סלע',
    link: 'https://www.facebook.com/watch/?share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2FY9u9brjLmgMAzzXJ%2F&v=2471067606427734&rdid=LvVhE3Neg3qmKbZN'
  },
  {
    title: 'הלוחם האמיץ עם הלב הגדול.',
    description: 'ynet',
    link: 'https://www.ynet.co.il/environment-science/article/rk002muazr?utm_source=ynet.app.android&utm_medium=social&utm_campaign=whatsapp&utm_term=rk002muazr&utm_content=Header'
  },
]

const POINTS = [
  {
    title: 'ערד - מצפה מואב',
    link: '/arad'
  },
  {
    title: 'הר החרמון',
    link: '/arad'
  },
  {
    title: 'הר עמשא',
    link: '/arad'
  },
  {
    title: 'מצפה הימים',
    link: '/arad'
  },
  {
    title: 'הר קטום',
    link: '/arad'
  },
  {
    title: 'גב ימין',
    link: '/arad'
  },
  {
    title: 'נהר הירדן',
    link: '/arad'
  },
  {
    title: 'מצפה שלם',
    link: '/arad'
  },
  {
    title: 'מדרשת בן גוריון',
    link: '/arad'
  },
  {
    title: 'חוף גינוסר',
    link: '/arad'
  },
  {
    title: 'הר עצמון',
    link: '/arad'
  },
  {
    title: 'הר אביטל',
    link: '/arad'
  },
  {
    title: 'תל חדיד',
    link: '/arad'
  },
  {
    title: 'נביא מוסא',
    link: '/arad'
  },
  {
    title: 'חרבת קצרה',
    link: '/arad'
  },
]
export default function Home() {
  return (
    <div className="flex flex-col bg-[#fcfcf7] min-h-fit">
      <Header />
      <div className="min-h-screen w-full items-start flex flex-col px-8 md:px-32 pt-[12rem]" dir="rtl">
        <div className="flex flex-col-reverse md:flex-row w-full gap-4 md:gap-16 justify-between">
          <div className="flex flex-col w-full md:w-1/2 gap-8 pb-8">
            {STATIC_CONTENT.map((item, _) => <div key={`${_}-item-content`} className="flex flex-col">
              <p className="font-medium">{item?.title}</p>
              <p>{item?.content}</p>
            </div>)}
            <p>יהי זכרו נצור בליבנו לעד.</p>
          </div>
          <div className="flex flex-col h-fit w-full md:w-1/2 items-center">
            <Image alt="amir-logo" src="/Amir-hero-image.png" width="552" height="575" />
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#D5D5D5] mb-10"></div>
        <p className="text-[#3c3c3c] text-2xl font-semibold">הנקודות בפרויקט</p>
        <p className="text-[#3c3c3c] text-base font-normal mb-6">בחרו נקודה כדי לדעת מה החיבור של אמיר אליה.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-15 w-full">
          {
            POINTS.map((point, _) => <PointCard key={`${_}-point`} point={point} />)
          }
        </div>
        <div className="w-full h-[524px] rounded-[24px] border flex items-center justify-center mb-10">Map</div>
        <div className="h-[1px] w-full bg-[#D5D5D5] mb-10"></div>
        <p className="text-[#3c3c3c] text-2xl font-semibold">קריאה נוספת</p>
        <p className="text-[#3c3c3c] text-base font-normal mb-6">קישורים לכתבות וחומרים על אמיר</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-15">
          {
            EXTERNAL_LINKS.map((link, _) => <ExternalLinkCard key={`${_}-link`} link={link} />)
          }
        </div>
        <div className="h-[1px] w-full bg-[#D5D5D5] mb-10"></div>
        <p className="text-[5d5d5d] text-xs pb-10">&apos;שלא נצא בורים&apos; - פרויקט ההנצחה לזכר אמיר צור</p>
      </div>
    </div>

  );
}

const Header = () => {
  return (
    <div className="flex gap-4 mb-12 fixed inset-0 h-fit py-8 backdrop-blur-xl w-full px-8 md:px-32">
      <div className="">
        <svg width="38" height="76" viewBox="0 0 38 76" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.8421 18.7718L26.7224 23.745C26.3211 24.2293 25.7778 24.5753 25.1692 24.7341L14.7207 27.4591C13.8333 27.6905 12.8888 27.5034 12.1568 26.951L7.45453 23.4033C6.4278 22.6287 6.00909 21.2858 6.41364 20.0649L7.15789 17.8188M30.8421 18.7718L31.2167 7.46651C31.2715 5.81383 29.9786 4.42847 28.3261 4.3691L19.5738 4.05465C18.6177 4.0203 17.7026 4.44404 17.1102 5.19534L7.15789 17.8188M30.8421 18.7718L15.4496 23.5031C14.4227 23.8188 13.3054 23.5612 12.5203 22.8279L7.15789 17.8188M21.8421 36.8792L25.4988 36.2104C26.4714 36.0325 27.4692 36.3452 28.1662 37.0464L30.4893 39.3833C31.2868 40.1856 31.5652 41.3682 31.2094 42.4419L30.1841 45.5361C29.9955 46.1052 29.6408 46.6048 29.1656 46.9703L22.1954 52.3323C21.9612 52.5124 21.7016 52.657 21.4251 52.7613L11.3248 56.5715C10.7699 56.7809 10.1653 56.821 9.58756 56.6869L5.63105 55.7684C4.79462 55.5742 4.08148 55.031 3.67219 54.2761L2.45465 52.0306C1.86353 50.9405 2.00413 49.5989 2.80842 48.655L4.31579 46.8859L9.52632 41.6443L11.2942 39.8658C11.6868 39.4709 12.1816 39.193 12.7231 39.0633L21.8421 36.8792ZM20.4211 26.8725L25.5219 25.6883C26.205 25.5298 26.9219 25.6155 27.5484 25.9305L29.6638 26.9946C30.6767 27.504 31.3158 28.5409 31.3158 29.6747V30.1757C31.3158 31.0984 30.8912 31.9698 30.1644 32.5384L27.5449 34.588C27.2202 34.842 26.8466 35.0264 26.4475 35.1297L11.1738 39.0807C10.7136 39.1997 10.2318 39.2077 9.76798 39.104L8.11743 38.735C6.95826 38.4759 6.06112 37.5572 5.82951 36.3923L5.67022 35.5911C5.42555 34.3604 5.97259 33.1075 7.0415 32.4504L13.3522 28.5708C13.6416 28.3929 13.9591 28.2654 14.2912 28.1939L20.4211 26.8725ZM30.7804 50.4205V50.4205C31.1287 50.911 31.3158 51.4977 31.3158 52.0993V53.2039C31.3158 54.5416 30.4301 55.7176 29.1445 56.0872L27.1134 56.6709C25.7215 57.071 24.248 56.3819 23.6628 55.0572V55.0572C23.1447 53.8845 23.4588 52.5108 24.435 51.6799L26.5364 49.8911C27.8323 48.7881 29.7951 49.0329 30.7804 50.4205ZM1.14379 63.8275L1.37791 67.3602C1.43842 68.2732 1.91231 69.1087 2.66489 69.6292L8.36184 73.5692C8.81368 73.8817 9.34266 74.0641 9.89107 74.0966L24.4571 74.9585C24.9181 74.9858 25.3791 74.9063 25.8043 74.7262L33.1911 71.5974C33.817 71.3323 34.3343 70.8625 34.6583 70.265L36.3497 67.1457C36.7629 66.3837 36.8262 65.4801 36.5234 64.6679L34.7409 59.8861C34.3784 58.9137 33.539 58.1976 32.5216 57.9929L18.4584 55.1635C17.8846 55.0481 17.2897 55.103 16.7468 55.3214L3.01733 60.846C1.81389 61.3302 1.05801 62.5331 1.14379 63.8275Z" stroke="#1A1C20" strokeWidth="2" />
        </svg>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-[2.625rem] leading-[3.125rem] text-[#1a1c20] font-bold">&quot;שלא נצא בורים&quot;</h1>
        <p className="text-lg md:text-[1.5rem] font-medium text-[#3c3c3c]">פרויקט הנצחה לזכרו של סרן אמיר צור</p>
      </div>
    </div>
  );
};

const PointCard = ({ point }: { point: { title: string, link: string } }) => {
  return (
    <Link href={point?.link} className="flex border border-[#E0DFDC] bg-[#F7F6F2] rounded-[24px] py-4 px-6 gap-2 text-base md:text-lg">
      <MarkerSvg />
      <p>{point?.title}</p>
    </Link>
  )
}

const ExternalLinkCard = ({ link }: { link: { title: string, description: string, link: string } }) => {
  return (
    <Link target="_blank" href={link?.link} className="flex flex-col border border-[#E0DFDC] bg-[#F7F6F2] rounded-[24px] p-4 gap-2">
      <p className="text-[#3c3c3c] text-sm md:text-base underline">{link?.title}</p>
      <p className="text-[#888989] text-sm">{link?.description}</p>
    </Link>
  )
}