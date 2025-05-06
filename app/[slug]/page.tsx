import { Image as ImageIcon } from "lucide-react"
import Footer from "../components/Footer"
import Divider from "../components/Divider"
import MapSection from "../components/MapSection"
import PointsSection from "../components/PointsSection"
import CarouselDemo from "../components/CarouselDemo"
import { POINTS } from "../data/constants";


export default function Page() {
    return <div className="flex flex-col bg-[#fcfcf7] min-h-fit w-full">
        <div className="min-h-screen w-full items-start flex flex-col px-8 xl:px-32 pt-[12rem]" dir="rtl">
            <div className="flex flex-col xl:flex-row gap-8 mb-10">
                <div className="flex flex-col gap-4 w-full xl:w-1/2">
                    <AboutSection />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full xl:w-1/2 ">
                    <div className="flex xl:hidden">
                        <CarouselDemo />
                    </div>
                    {[1, 2, 3, 4].map((item) => (
                        <div className="flex-col gap-2 w-full h-full hidden xl:flex" key={item}>
                            <div className="rounded-lg bg-gray-200 p-4 flex items-center justify-center h-full w-full">
                                <ImageIcon className="w-8 h-8 text-[#857F7A]" />
                            </div>
                            <p className="text-xs text-[#555555]">טקסט קצר עם הסבר על התמונה</p>
                        </div>
                    ))}
                </div>
            </div>
            <Divider />
            <PointsSection />
            <MapSection points={POINTS} />
            <Divider />
            <Footer />
        </div>
    </div>
}


const AboutSection = () => {
    return <div className="flex flex-col gap-4 text-base">
        <p>
            רוח של למידה, העמקה והרחבת אופקים פעמה בלבו של אמיר, חברנו לצוות. כך מכל סקירה גאוגרפית המתבצעת בסוף ניווט או מסע מפרך, אשר אמורה להיות יבשה ולהסתכם בחיבור הנקודות שרואים בשטח אל המפה, אמיר היה משפיע עלינו ממעיין הידע וחדוות הלמידה שלו. כל פריט בנוף הוא פתח לאינספור הרחבות היסטוריות, גיאולוגיות, תרבותיות ומה לא? ברוח זו נרצה להכיר את המקום בו אתם נמצאים עכשיו.
        </p>
        <p>
            <br />
            <span className="font-semibold">מצפה מואב</span> הינה נקודת תצפית יפייפיה בעיר ערד, בגובה 600 מ&quot; מעל פני הים. את הפסל המוצב במצפה, הגה, תכנן ובנה הפסל יגאל טומרקין. הפסל עשוי בטון וכלי נשק פגומים ונבנה לזכר מבצע &quot;לוט&quot; לכיבוש אזור ים המלח במלחמת העצמאות. הפסל נחנך ומומן על ידי תושבי העיר ערד בשנת 1967, אשר היו כמהים ליצירת אמנות בעירם. התושבים מימנו אותו ב&quot;גיוס המונים&quot;.
            מצפה מואב חולש על - מדבר יהודה, ים המלח, עבר הירדן והרי מואב שבירדן. כמו כן צופה הוא גם על מצדה, הרי חברון והר הקנאים.
            <br />

            <br />
            הפרויקט נועד לשמר את הזיכרונות הטובים מאמיר, ובאותה נשימה גם להרחיב את הידע, ללמד ולחנך, כמו שאמיר אהב.
            <br />
            <br />
        </p>
        <p>
            <span className="font-semibold">פתח למבצע לוט</span> - מבצע של חטיבת הנגב בסוף מלחמת העצמאות אשר מטרתו הייתה הרחבת תחום שליטתה של ישראל במזרח הנגב ופתיחת הדרך היבשתית לסדום שנחסמה עם פרוץ המלחמה. המבצע כמעט ולא כלל לחימה ועיקר האתגר שבו היה קושי לוגיסטי שהציבו תנאי הדרך. המבצע השיג את מטרתו וחודש הקשר עם הישוב בסדום לאחר 7 חודשי ניתוק (פרק הזמן הארוך ביותר בו יישוב יהודי היה מנותק במלחמת העצמאות).
            <br />
            <br />
            <span className="font-semibold">פתח להרי מואב</span> - מואב על שם מי? על שם בנו של לוט, אחיינו של אברהם אבינו, שנולד מיחסיו עם בתו הבכורה, שהיו גילוי עריות.
            גובה - הפרש הגבהים בין פסגות הרי מואב לים המלח הוא כ-1500 מ&quot;! (כדי לקבל פרופורציות, הפרש הגבהים בין מצפה מואב לים המלח הוא כ-1000 מ&quot;).
            <br />

            <br />
            <span className="font-semibold">פתח להר הקנאים</span> - שמו מנציח את הקנאים שנלחמו ברומאים במצדה הסמוכה (אותה ניתן לראות גם כן מהמצפה).
            <br />
            לוחמי סיירת נחל מסיימים על פסגת ההר את מסכם המסלול ושם מקבלים את סיכת הלוחם.
        </p>
        <p>
            <span className="font-semibold">כל מקום הוא הזדמנות ללמוד וכל לימוד הוא פתח לעוד לימוד.</span> את הרוח הזו הנחיל לנו אמיר בעצם הוויתו בתקופה המסלול ולאחריו בסיירת מטכ&quot;ל, ואותה אנו מקווים להנחיל לעצמנו ולכל אדם שיוצא החוצה אל הטבע והמרחבים, בעיניים בוהקות וברוח סקרנית, כמו אמיר.
        </p>
    </div>
}