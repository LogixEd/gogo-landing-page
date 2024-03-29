import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n)

const messages = {
    'th':{
        'navHome': 'หน้าหลัก',
        'navAbout': 'เกี่ยวกับ',
        'navDoc': 'เอกสาร',
        'buyNow': 'ซื้อเลย',
        'learnMore': 'เรียนรู้เพิ่มเติม',
        'hardware': 'ฮาร์ดแวร์',
        'software': 'ซอฟแวร์',
        'introTitle': 'เปลี่ยนความคิดให้เป็นการลงมือทำ',
        'intro': 'GoGo Board เป็นอุปกรณ์ราคาประหยัดเพื่อการศึกษา เข่น การสร้างหุ่นยนต์ การทำโครงงานวิทยาศาสตร์ และ Iots เด็กสามารถใช้ GoGo Board ในการสร้างหุ่นยนต์ หรือแม้กระทั่งการวัดค่าสภาพแวดล้ามต่างๆผ่านเซ็นเซอร์ รวมไปถึงการสร้างอุปกรณ์ควบคุมเพื่อใช้ในการเล่นเกม และยังมีอีกหลายอย่างที่สามารถสร้างได้ด้วย GoGo Board',
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
        }

    },
    'en':{
        'navHome': 'Home',
        'navAbout': 'About',
        'navDoc': 'Documentation',
        'buyNow': 'BUY NOW',
        'learnMore': 'Learn More',
        'hardware': 'Hardware',
        'software': 'Software',
        'introTitle': 'Turn imagination to practice',
        'intro': 'The GoGo Board is a low-cost open-source hardware device for educational robotics, scientific experiments, and environmental sensing. Children can use the board to construct robots, measure and log environmental data, conduct scientific investigations, create game controllers, build interactive art installations, and much more.',
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
        }
    }
}

const i18n = new VueI18n({
    locale: 'th',
    fallbackLocale :'en',
    messages
})

export default i18n