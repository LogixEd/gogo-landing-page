import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n)

const messages = {
    'th':{
        'navHome': 'หน้าหลัก',
        'navAbout': 'เกี่ยวกับ',
        'navDoc': 'เอกสาร',
        'navPro': 'สินค้า',
        'navFAQ': 'คำถาม',
        'navContact': 'ติดต่อ',
        'buyNow': 'ซื้อเลย',
        'learnMore': 'เรียนรู้เพิ่มเติม',
        'hardware': 'ฮาร์ดแวร์',
        'software': 'ซอฟแวร์',
        'introTitle': 'เปลี่ยนความคิดให้เป็นการลงมือทำ',
        'introTitle1': 'Science and Robotic Toolkit for Inventive minds',
        'intro': 'GoGo Board เป็นอุปกรณ์ราคาประหยัดเพื่อการศึกษา เข่น การสร้างหุ่นยนต์ การทำโครงงานวิทยาศาสตร์ และ IoTs เด็กสามารถใช้ GoGo Board ในการสร้างหุ่นยนต์ หรือแม้กระทั่งการวัดค่าสภาพแวดล้ามต่างๆผ่านเซ็นเซอร์ รวมไปถึงการสร้างอุปกรณ์ควบคุมเพื่อใช้ในการเล่นเกม และยังมีอีกหลายอย่างที่สามารถสร้างได้ด้วย GoGo Board',
        'intro1':'หุ่นยนต์ส่งเสริมการเรียนรู้และสนับสนุนความคิดสร้างสรรค์ของเยาวชน',
        'intro2':'ปลูกฝังเยาวชนรุ่นใหม่ให้กล้าคิดกล้าทำมีความคิดสร้างสรรค์ และแก้ไขปัญหาเป็น',
        'intro3':'สนับสนุนการพัฒนาองค์ความรู้ในศตวรรตที่ 21 STEM, Project base learning และ Innovation',
        'gogoCode': 'และนี่คือเครื่องมือที่ใช้เพื่อควบคุม GoGo Board',
        'exampleTitle': 'ลองดูสิ',
        'exampleSub': 'และนี่คือตัวอย่างในการทำให้ GoGo Board เล่นเสียง',
        'supportTitle': 'แพลทฟอร์มที่รองรับ',
        'arduinoSub': 'Arduino คือ open-sourcse ที่เป็นที่ผลิตตัว microcontroller และเป็นที่ยอมรับสำหรับทั่วโลกในการทำ hardware และ software',
        'groveSub': 'Grove คือ sensor ที่อำนวยความสะดวกสำหรับการเชื่อมต่อกับตัว microprocessor ไม่ว่าเป็น input หรือ output เพื่อให้เกิดความสะดวกในการเชื่อมต่อของอุปกรณ์',
        'scratchSub': 'Scratch เป็น platform ที่ฟรี และออนไลน์สำหรับการพัฒนาการคิดริเริ่มสร้างสรรค์ สำหรับการเขียน code รวมไปถึงการเขียนโค้ดสำหรับ hardware',
        'outroTitle': {
            'outro1': 'สนใจในตัว',
            'outro2': 'อยากเห็นว่า GoGo Board ทำอะไรได้อีก?',
            'outro3': 'คุณสามารถเข้าไปดูรายละเอียดของ GoGo Board ได้ในลิ้งข้างล่างนี้'
        },
        'footer':{
            'footer1': 'ขอบคุณสำหรับเข้าชมเว็บไซท์ของเรา',
            'footer2': 'คุณสามารถติดต่อกับเราได้ช่องทางตามนี้'
        },
        'FAQ':{
            'FAQTitle': 'คำถามที่พบบ่อย'
        },
        'Contact':{
            'ContactTitle': 'ติดต่อเรา',
            'EmailTitle': 'ส่งอีเมลล์มาหาเรา',
            'SendEmailButton': 'ส่งอีเมลล์',
            'YourEmail': 'อีเมลล์ของคุณ',
            'Title': 'เรื่อง',
            'Message': 'ข้อความ...'
        }

    },
    'en':{
        'navHome': 'Home',
        'navAbout': 'About',
        'navDoc': 'Docs',
        'navPro': 'Products',
        'navFAQ': 'FAQ',
        'navContact': 'Contact',
        'buyNow': 'BUY NOW',
        'learnMore': 'Learn More',
        'hardware': 'Hardware',
        'software': 'Software',
        'introTitle': 'Turn imagination to practice',
        'introTitle1': 'Science and Robotic Toolkit for Inventive minds',
        'intro': 'The GoGo Board is a low-cost open-source hardware device for educational robotics, scientific experiments, and environmental sensing. Children can use the board to construct robots, measure and log environmental data, conduct scientific investigations, create game controllers, build interactive art installations, and much more.',
        'intro1': 'The GoGo board is a device for educational robotics, scientific experiments, and environmental sensing.',
        'intro2': 'Children can use the board to create a things from their imagination also solving a problems.',
        'intro3': 'Support 21st Century Knowledge Enhancement STEM, Project base learning และ Innovation',
        'gogoCode': 'This is the tool for operating the board.',
        'exampleTitle': 'TRY THIS',
        'exampleSub': 'beep example',
        'supportTitle': 'Supported Platform',
        'arduinoSub': 'Arduino is a world wide open-source electronics platform based on easy-to-use hardware and software.',
        'groveSub': 'Grove is an open modular system designed for easy connection of any input or output model to a microprocessor.',
        'scratchSub': 'Scratch is a free programming language and online community where you can freely create your imagination with coding.',
        'outroTitle': {
            'outro1': 'Interested',
            'outro2': 'Want to see more about GoGo Board?',
            'outro3': 'You can see the product information at this link down below. Thanks for your interest in our product we hope you enjoy our product.'
        },
        'footer':{
            'footer1': 'Thank you for visiting us',
            'footer2': "Let's get in touch on any of these platforms."
        },
        'FAQ':{
            'FAQTitle': 'Frequently Asked Question'
        },
        'Contact':{
            'ContactTitle': 'Contact Us',
            'EmailTitle': 'Send Us and Email',
            'SendEmailButton': 'Send Email',
            'YourEmail': 'Your Email',
            'Title': 'Title',
            'Message': 'Type a Message...'
        }
    }
}

const i18n = new VueI18n({
    locale: 'th',
    fallbackLocale :'en',
    messages
})

export default i18n