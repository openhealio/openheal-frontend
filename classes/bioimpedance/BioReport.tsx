import Bioimpedance from './Bioimpendance';
import { createCanvas, loadImage } from 'canvas'


export default class BioReport {
    bioimpedance: Bioimpedance;
    language: string
    name: string
    cat_icw: string
    cat_ecw: string
    cat_protein: string
    cat_mineral: string
    cat_weight: string
    cat_smm: string
    cat_ffm: string
    cat_pbf: string
    cat_fat: string
    cat_bmi: string
    cat_segmental_lean_ra: string
    cat_segmental_lean_la: string
    cat_segmental_lean_rl: string
    cat_segmental_lean_ll: string
    cat_segmental_lean_tr: string
    finalImageBuffer: Buffer




    constructor(bioimpedance, language, name) {
        this.bioimpedance = bioimpedance;
        this.language = language;
        this.name = name

        //Categorical

        this.cat_icw = Number(this.bioimpedance.icw) < Number(this.bioimpedance.icw_min) ? 'under_bad' : Number(this.bioimpedance.icw) > Number(this.bioimpedance.icw_max) ? 'over_bad' : 'normal'
        this.cat_ecw = Number(this.bioimpedance.ecw) < Number(this.bioimpedance.ecw_min) ? 'under_bad' : Number(this.bioimpedance.ecw) > Number(this.bioimpedance.ecw_max) ? 'over_bad' : 'normal'
        this.cat_protein = Number(this.bioimpedance.protein) < Number(this.bioimpedance.protein_min) ? 'under_bad' : Number(this.bioimpedance.protein) > Number(this.bioimpedance.protein_max) ? 'over_good' : 'normal'
        this.cat_mineral = Number(this.bioimpedance.mineral) < Number(this.bioimpedance.mineral_min) ? 'under_bad' : Number(this.bioimpedance.mineral) > Number(this.bioimpedance.mineral_max) ? 'over_good' : 'normal'
        this.cat_weight = Number(this.bioimpedance.weight) < Number(this.bioimpedance.weight_min) ? 'under_bad' : Number(this.bioimpedance.weight) > Number(this.bioimpedance.weight_max) ? 'over_bad' : 'normal'
        this.cat_smm = Number(this.bioimpedance.smm_skeletal_muscle_mass) < Number(this.bioimpedance.smm_min) ? 'under_bad' : Number(this.bioimpedance.smm_skeletal_muscle_mass) > Number(this.bioimpedance.smm_max) ? 'over_good' : 'normal'
        this.cat_ffm = Number(this.bioimpedance.ffm_fat_free_mass) < Number(this.bioimpedance.ffm_min) ? 'under_bad' : Number(this.bioimpedance.ffm_fat_free_mass) > Number(this.bioimpedance.ffm_max) ? 'over_good' : 'normal'
        this.cat_pbf = Number(this.bioimpedance.pbf_percent_body_fat) < Number(this.bioimpedance.pbf_min) ? 'under_bad' : Number(this.bioimpedance.pbf_percent_body_fat) > Number(this.bioimpedance.pbf_max) ? 'over_bad' : 'normal'
        this.cat_fat = Number(this.bioimpedance.fat) < Number(this.bioimpedance.fat_min) ? 'under_bad' : Number(this.bioimpedance.fat) > Number(this.bioimpedance.fat_max) ? 'over_bad' : 'normal'
        this.cat_bmi = Number(this.bioimpedance.bmi) < Number(this.bioimpedance.bmi_min) ? 'under_bad' : Number(this.bioimpedance.bmi) > Number(this.bioimpedance.bmi_max) ? 'over_bad' : 'normal'
        this.cat_segmental_lean_ra = Number(this.bioimpedance.segmental_lean_ra) < Number(this.bioimpedance.segmental_lean_ra_min) ? 'under_bad' : Number(this.bioimpedance.segmental_lean_ra) > Number(this.bioimpedance.segmental_lean_ra_max) ? 'over_good' : 'normal'
        this.cat_segmental_lean_la = Number(this.bioimpedance.segmental_lean_la) < Number(this.bioimpedance.segmental_lean_la_min) ? 'under_bad' : Number(this.bioimpedance.segmental_lean_la) > Number(this.bioimpedance.segmental_lean_la_max) ? 'over_good' : 'normal'
        this.cat_segmental_lean_tr = Number(this.bioimpedance.segmental_lean_tr) < Number(this.bioimpedance.segmental_lean_tr_min) ? 'under_bad' : Number(this.bioimpedance.segmental_lean_tr) > Number(this.bioimpedance.segmental_lean_tr_max) ? 'over_good' : 'normal'
        this.cat_segmental_lean_rl = Number(this.bioimpedance.segmental_lean_rl) < Number(this.bioimpedance.segmental_lean_rl_min) ? 'under_bad' : Number(this.bioimpedance.segmental_lean_rl) > Number(this.bioimpedance.segmental_lean_rl_max) ? 'over_good' : 'normal'
        this.cat_segmental_lean_ll = Number(this.bioimpedance.segmental_lean_ll) < Number(this.bioimpedance.segmental_lean_ll_min) ? 'under_bad' : Number(this.bioimpedance.segmental_lean_ll) > Number(this.bioimpedance.segmental_lean_ll_max) ? 'over_good' : 'normal'




    }

    getTexts(this) {
        const options = {
            "pt": [
                `Circunerência da cintura estimada pela bioimpedância - ${this.bioimpedance.waist_cir} cm`,
                `-------`,
                `Água Corporal Total - ${this.bioimpedance.tbw_total_body_water} litros (esperado de ${this.bioimpedance.tbw_min} a ${this.bioimpedance.tbw_max} litros)`,
                `É o volume total de água no corpo. A soma da água intracelular e extracelular.`,
                `Água Extracelular - É a quantidade de água ora das células`,
                `Água Intracelular - É a quantidade de água dentro das células`,
                `-------`,
                `Músculo Esquelético - A massa de músculo esquelético é computada baseada na massa de músculos dos membros, que é quase toda`,
                `composta de músculo esquelético e é cerca de 70% da quantidade de músculo do corpo inteiro.`,
                `-------`,
                `Índice de edema - ${this.bioimpedance.ecw_tbw_total}`,
                `A medida da quantidade de água intracelular e extracelular separadamente permite a avaliação do balanço dos níveis de água.`,
                `A taxa (água extracelular / água corporal total) pode ser avaliada não somente em cada parte do corpo, mas também no corpo inteiro.`,
                `Pessoas saudáveis se mantem em certo equilíbrio entre os compartimentos intra e extracelular com relação a quantidade de agua.`,
                `No entanto, se a quantidade de agua no compartimento extracelular se eleva, poderá ocorrer edema.`,
                `A taxa normal para ECW/TBW (índice de edema) é considerada 0.36 a 0.39.`,
                `Valores entre 0.39 e 0.40 signiica edema leve e acima de 0.40 edema.`,
                `Índice de edema = água extracelular / água corporal total`,
                `-----`,
                `Parâmetros Nutricionais`,
                `Taxa metabólica basal - ${this.bioimpedance.bmr} Kcal nas 24 horas`,
                `Massa Celular Corporal - ${this.bioimpedance.body_cell_mass} Kg (esperado de ${this.bioimpedance.bcm_min} a ${this.bioimpedance.bcm_max} Kg)`,
                `Área de gordura viceral - ${this.bioimpedance.vfa} cm2`,
                `A gordura no corpo é dividida em categorias dependendo da localização da gordura: gordura viceral, gordura subcutânea e a gordura entre`,
                `os músculos. Um individuo com uma área de gordura viceral maior que 100cm2 é considerado ser abdominalmente obeso do compartimento`,
                `da gordura viceral.`,
                "-----",
            ]
        }

        return options[this.language]
    }

    getColor(str) {
        const options = {
            "std": `black`,
            "normal": `green`,
            "under_bad": `red`,
            "under_good": `blue`,
            "over_bad": `red`,
            "over_good": `blue`
        }

        return options[str]  // error is because there is no option
    }


    getBars(string) {
        const bars = {
            'under': '|-----|',
            'normal': '|-------------------------|',
            'over': '|-------------------------------------------|'
        }

        const options = {
            'std': '',
            'normal': bars['normal'],
            'under_bad': bars['under'],
            'over_bad': bars['over'],
            'under_good': bars['under'],
            'over_good': bars['over']
        }

        return options[string]  // error is because there is no option
    }

    getCanvas(this, width: number, height: number) {

        const positions = {
            "relLines_old": [0.037, 0.0815, 0.1, 0.16, 0.18, 0.1975, 0.215, 0.2325, 0.297, 0.322, 0.347, 0.372, 0.397, 0.46, 0.482, 0.506, 0.529, 0.553],
            "relLines": [0.058, 0.0895, 0.108, 0.168, 0.188, 0.2055, 0.223, 0.2405, 0.305, 0.33, 0.355, 0.38, 0.401, 0.468, 0.49, 0.514, 0.537, 0.561],
            "relLinesTxt": [0.59, 0.60, 0.61, 0.62, 0.63, 0.64, 0.65, 0.66, 0.67, 0.68, 0.69, 0.7, 0.71, 0.72, 0.73, 0.74, 0.75, 0.76, 0.77, 0.78, 0.79, 0.80, 0.81, 0.82, 0.83, 0.84, 0.85, 0.86, 0.87, 0.88, 0.89, 0.90, 0.91, 0.92, 0.93, 0.94],
            "relColumn0": [0.25],
            "relColumn1": [0.1, 0.32, 0.5],
            "relColumn2": [0.22, 0.3, 0.380, 0.61, 0.71, 0.8, 0.9],
            "relColumnBar": [0.49],
            "relColumnTxt": [0.05]
        }


        const dir = "/Users/flavio/projects/openheal/inbodyS10_frontend/public"


        // carregar a imagem
        const newImageBuffer = loadImage(dir + `/folha_result_inbody_s10.jpg`).then((image) => {

            const canvas = createCanvas(width, height);
            const ctx = canvas.getContext(`2d`);

            // desenhar a imagem no canvas
            ctx.drawImage(image, 0, 0, width, height);

            const x = width
            const y = height

            const fontSize = (0.009 * y)
            const font = `${fontSize}px Arial`

            const fontNameSize = (0.012 * y)
            const fontName = `${fontNameSize}px Arial`

            const fontTxtSize = (0.007 * y)
            const fontTxt = `${fontTxtSize}px Arial`

            const insertText = (x: number, y: number, text: string, font: string, colorCode: string) => {
                //console.log(x, y, text, font, colorCode)
                ctx.font = font
                ctx.fillStyle = this.getColor(colorCode)
                ctx.fillText(text, x, y)
            }



            // # Add Text to an image
            // # Lines
            const relLines = positions[`relLines`]
            const lines = relLines.map(i => (i * y))


            const relLinesTxt = positions[`relLinesTxt`]
            const linesTxt = relLinesTxt.map(i => (i * y))

            // # Columns
            const relColumn0 = positions[`relColumn0`]
            const column0 = relColumn0.map(i => (i * x))

            const relColumn1 = positions[`relColumn1`]
            const column1 = relColumn1.map(i => (i * x))

            const relColumn2 = positions[`relColumn2`]
            const column2 = relColumn2.map(i => (i * x))

            const relColumnBar = positions[`relColumnBar`]
            const columnBar = relColumnBar.map(i => (i * x))

            const relColumnTxt = positions[`relColumnTxt`]
            const columnTxt = relColumnTxt.map(i => (i * x))

            // # Text Lines
            const texts = this.getTexts()

            //Name
            insertText(column0[0], lines[0], this.name, fontName, `std`)

            //# Ids
            insertText(column1[0], lines[1], this.bioimpedance.id, fontTxt, `std`)
            insertText(column1[1], lines[1], `${this.bioimpedance.height} cm`, font, `std`)
            insertText(column1[2], lines[1], this.bioimpedance.date_times, font, `std`)
            insertText(column1[0], lines[2], `${this.bioimpedance.age} anos`, font, `std`)
            insertText(column1[1], lines[2], this.bioimpedance.sex, font, `std`)

            //# Corporal Composition Analisis
            insertText(column2[0], lines[3], `litros`, font, `std`)
            insertText(column2[1], lines[3], this.bioimpedance.icw, font, this.icw)
            insertText(column2[2], lines[3], `${this.bioimpedance.icw_min} - ${this.bioimpedance.icw_max}`, font, `std`)
            insertText(column2[0], lines[4], `litros`, font, `std`)
            insertText(column2[1], lines[4], this.bioimpedance.ecw, font, this.cat_ECW)
            insertText(column2[2], lines[4], `${this.bioimpedance.ecw_min} - ${this.bioimpedance.ecw_max}`, font, `std`)
            insertText(column2[3], lines[4], this.bioimpedance.tbw_total_body_water, font, `std`)
            insertText(column2[0], lines[5], `Kg`, font, `std`)
            insertText(column2[1], lines[5], this.bioimpedance.protein, font, this.cat_protein)
            insertText(column2[2], lines[5], `${this.bioimpedance.protein_min} - ${this.bioimpedance.protein_max}`, font, `std`)
            insertText(column2[4], lines[5], this.bioimpedance.slm_soft_lean_mass, font, `std`)
            insertText(column2[0], lines[6], `Kg`, font, `std`)
            insertText(column2[1], lines[6], this.bioimpedance.mineral, font, this.cat_mineral)
            insertText(column2[2], lines[6], `${this.bioimpedance.mineral_min} - ${this.bioimpedance.mineral_max}`, font, `std`)
            insertText(column2[5], lines[6], this.bioimpedance.ffm_fat_free_mass, font, `std`)
            insertText(column2[0], lines[7], `Kg`, font, `std`)
            insertText(column2[1], lines[7], this.bioimpedance.fat, font, this.cat_fat)
            insertText(column2[2], lines[7], `${this.bioimpedance.fat_min} - ${this.bioimpedance.fat_max}`, font, `std`)
            insertText(column2[6], lines[7], this.bioimpedance.weight, font, `std`)

            //Fat - muscle analisis
            insertText(column2[0], lines[8], `Kg`, font, `std`)
            insertText(column2[1], lines[8], this.bioimpedance.weight, font, `std`)
            insertText(column2[2], lines[8], `${this.bioimpedance.weight_min} - ${this.bioimpedance.weight_max}`, font, `std`)
            insertText(columnBar[0], lines[8], this.getBars(this.cat_weight), font, `std`)
            insertText(column2[0], lines[9], `Kg`, font, `std`)
            insertText(column2[1], lines[9], this.bioimpedance.smm_skeletal_muscle_mass, font, this.cat_smm)
            insertText(column2[2], lines[9], `${this.bioimpedance.smm_min} - ${this.bioimpedance.smm_max}`, font, `std`)
            insertText(columnBar[0], lines[9], this.getBars(this.cat_smm), font, `std`)
            insertText(column2[0], lines[10], `Kg`, font, `std`)
            insertText(column2[1], lines[10], this.bioimpedance.fat, font, this.cat_fat)
            insertText(column2[2], lines[10], `${this.bioimpedance.fat_min} - ${this.bioimpedance.fat_max}`, font, `std`)
            insertText(columnBar[0], lines[10], this.getBars(this.cat_fat), font, `std`)
            insertText(column2[0], lines[11], `%`, font, `std`)
            insertText(column2[1], lines[11], this.bioimpedance.pbf_percent_body_fat, font, this.cat_pbf)
            insertText(column2[2], lines[11], `${this.bioimpedance.pbf_min} - ${this.bioimpedance.pbf_max}`, font, `std`)
            insertText(columnBar[0], lines[11], this.getBars(this.cat_pbf), font, `std`)
            insertText(column2[0], lines[12], `Kg/m2`, font, `std`)
            insertText(column2[1], lines[12], this.bioimpedance.bmi, font, `std`)
            insertText(column2[2], lines[12], `${this.bioimpedance.bmi_min} - ${this.bioimpedance.bmi_max}`, font, `std`)
            insertText(columnBar[0], lines[12], ``, font, `std`)

            // segmentar analisis
            insertText(column2[0], lines[13], `kg`, font, `std`)
            insertText(column2[1], lines[13], this.bioimpedance.segmental_lean_la, font, this.cat_segmental_lean_la)
            insertText(column2[2], lines[13], `${this.bioimpedance.segmental_lean_la_min} - ${this.bioimpedance.segmental_lean_la_max}`, font, `std`)
            insertText(columnBar[0], lines[13], this.getBars(this.cat_segmental_lean_la), font, `std`)
            insertText(column2[0], lines[14], `kg`, font, `std`)
            insertText(column2[1], lines[14], this.bioimpedance.segmental_lean_la, font, this.cat_segmental_lean_la)
            insertText(column2[2], lines[14], `${this.bioimpedance.segmental_lean_la_min} - ${this.bioimpedance.segmental_lean_la_max}`, font, `std`)
            insertText(columnBar[0], lines[14], this.getBars(this.cat_segmental_lean_la), font, `std`)
            insertText(column2[0], lines[15], `kg`, font, `std`)
            insertText(column2[1], lines[15], this.bioimpedance.segmental_lean_tr, font, this.cat_segmental_lean_tr)
            insertText(column2[2], lines[15], `${this.bioimpedance.segmental_lean_tr_min} - ${this.bioimpedance.segmental_lean_tr_max}`, font, `std`)
            insertText(columnBar[0], lines[15], this.getBars(this.cat_segmental_lean_tr), font, `std`)
            insertText(column2[0], lines[16], `kg`, font, `std`)
            insertText(column2[1], lines[16], this.bioimpedance.segmental_lean_rl, font, this.cat_segmental_lean_rl)
            insertText(column2[2], lines[16], `${this.bioimpedance.segmental_lean_rl_min} - ${this.bioimpedance.segmental_lean_rl_max}`, font, `std`)
            insertText(columnBar[0], lines[16], this.getBars(this.cat_segmental_lean_rl), font, `std`)
            insertText(column2[0], lines[17], `kg`, font, `std`)
            insertText(column2[1], lines[17], this.bioimpedance.segmental_lean_ll, font, this.cat_segmental_lean_ll)
            insertText(column2[2], lines[17], `${this.bioimpedance.segmental_lean_ll_min} - ${this.bioimpedance.segmental_lean_ll_max}`, font, `std`)
            insertText(columnBar[0], lines[17], this.getBars(this.cat_segmental_lean_ll), font, `std`)


            // Text line by line

            const concatText = (numLines) => {
                for (let i = 0; i < numLines; i++) {
                    insertText(columnTxt[0], linesTxt[i], texts[i], fontTxt, `std`)
                }
            }

            concatText(27)

            const finalImageBuffer = canvas.toBuffer('image/jpeg');
    

            return finalImageBuffer;
        }
        ).catch((err) => { console.log(err) })
        
        return newImageBuffer

    }}
