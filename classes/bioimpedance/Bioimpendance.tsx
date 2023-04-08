

export default class Bioimpedance {
    rowId: string
    date_times: string
    id: string
    age: string
    height: string
    sex: string
    weight: string
    weight_min: string
    weight_max: string
    icw: string
    icw_min: string
    icw_max: string
    ecw: string
    ecw_min: string
    ecw_max: string
    tbw_total_body_water: string
    tbw_min: string
    tbw_max: string
    protein: string
    protein_min: string
    protein_max: string
    mineral: string
    mineral_min: string
    mineral_max: string
    fat: string
    fat_min: string
    fat_max: string
    slm_soft_lean_mass: string
    slm_min: string
    slm_max: string
    ffm_fat_free_mass: string
    ffm_min: string
    ffm_max: string
    smm_skeletal_muscle_mass: string
    smm_min: string
    smm_max: string
    pbf_percent_body_fat: string
    pbf_min: string
    pbf_max: string
    bmi: string
    bmi_min: string
    bmi_max: string
    segmental_water_ra: string
    segmental_water_ra_min: string
    segmental_water_ra_max: string
    segmental_water_la: string
    segmental_water_la_min: string
    segmental_water_la_max: string
    segmental_water_tr: string
    segmental_water_tr_min: string
    segmental_water_tr_max: string
    segmental_water_rl: string
    segmental_water_rl_min: string
    segmental_water_rl_max: string
    segmental_water_ll: string
    segmental_water_ll_min: string
    segmental_water_ll_max: string
    ecw_tbw_total: string
    ecw_tbw_ra: string
    ecw_tbw_la: string
    ecw_tbw_tr: string
    ecw_tbw_rl: string
    ecw_tbw_ll: string
    segmental_lean_ra: string
    segmental_lean_ra_min: string
    segmental_lean_ra_max: string
    segmental_lean_la: string
    segmental_lean_la_min: string
    segmental_lean_la_max: string
    segmental_lean_tr: string
    segmental_lean_tr_min: string
    segmental_lean_tr_max: string
    segmental_lean_rl: string
    segmental_lean_rl_min: string
    segmental_lean_rl_max: string
    segmental_lean_ll: string
    segmental_lean_ll_min: string
    segmental_lean_ll_max: string
    body_cell_mass: string
    bcm_min: string
    bcm_max: string
    bone_mineral_contents: string
    bmc_min: string
    bmc_max: string
    ac: string
    amc: string
    waist_cir: string
    vfa: string
    bmr: string
    tbw_ffm: string
    _1khz_ra_impedance: string
    _1khz_la_impedance: string
    _1khz_tr_impedance: string
    _1khz_rl_impedance: string
    _1khz_ll_impedance: string
    _5khz_ra_impedance: string
    _5khz_la_impedance: string
    _5khz_tr_impedance: string
    _5khz_rl_impedance: string
    _5khz_ll_impedance: string
    _50khz_ra_impedance: string
    _50khz_la_impedance: string
    _50khz_tr_impedance: string
    _50khz_rl_impedance: string
    _50khz_ll_impedance: string
    _250khz_ra_impedance: string
    _250khz_la_impedance: string
    _250khz_tr_impedance: string
    _250khz_rl_impedance: string
    _250khz_ll_impedance: string
    _500khz_ra_impedance: string
    _500khz_la_impedance: string
    _500khz_tr_impedance: string
    _500khz_rl_impedance: string
    _500khz_ll_impedance: string
    _1mhz_ra_impedance: string
    _1mhz_la_impedance :string   
    _1mhz_tr_impedance :string   
    _1mhz_rl_impedance :string   
    _1mhz_ll_impedance :string   
    _5khz_ra_reactance :string   
    _5khz_la_reactance :string   
    _5khz_tr_reactance :string   
    _5khz_rl_reactance :string   
    _5khz_ll_reactance :string   
    _50khz_ra_reactance:string
    _50khz_la_reactance:string
    _50khz_tr_reactance:string
    _50khz_rl_reactance:string
    _50khz_ll_reactance : string
    _250khz_ra_reactance: string
    _250khz_la_reactance: string
    _250khz_tr_reactance: string
    _250khz_rl_reactance: string
    _250khz_ll_reactance: string
    _5khz_ra_phase_angle: string
    _5khz_la_phase_angle: string
    _5khz_tr_phase_angle: string
    _5khz_rl_phase_angle: string
    _5khz_ll_phase_angle: string
    _50khz_ra_phase_angle: string
    _50khz_la_phase_angle: string
    _50khz_tr_phase_angle: string
    _50khz_rl_phase_angle: string
    _50khz_ll_phase_angle: string
    _250khz_ra_phase_angle: string
    _250khz_la_phase_angle: string
    _250khz_tr_phase_angle: string
    _250khz_rl_phase_angle: string
    _250khz_ll_phase_angle: string
    systolic: string
    diastolic: string
    heart_rate: string
    electrode: string
    posture: string
    access: string
    
    constructor(row){

        this.rowId = row['rowId']
        this.date_times = row["1.DATE&TIMES"]
        this.id = row["2.ID"]
        this.age = row["3.AGE"]
        this.height = row["4.HEIGHT"]
        this.sex = (row["5.SEX"] ?? row["5.GENDER"] as string)==="0"?"Masculino":"Feminino"
        this.weight = row["6.WEIGHT"]
        this.weight_min = row["7.WEIGHT_MIN"]
        this.weight_max = row["8.WEIGHT_MAX"]
        this.icw = row["9.ICW"]
        this.icw_min = row["10.ICW_MIN"]
        this.icw_max = row["11.ICW_MAX"]
        this.ecw = row["12.ECW"]
        this.ecw_min = row["13.ECW_MIN"]
        this.ecw_max = row["14.ECW_MAX"]
        this.tbw_total_body_water= row["15.TBW(Total Body Water)"]
        this.tbw_min = row["16.TBW_MIN"]
        this.tbw_max = row["17.TBW_MAX"]
        this.protein = row["18.Protein"]
        this.protein_min = row["19.Protein_MIN"]
        this.protein_max = row["20.Protein_MAX"]
        this.mineral = row["21.Mineral"]
        this.mineral_min = row["22.Mineral_MIN"]
        this.mineral_max = row["23.Mineral_MAX"]
        this.fat = row["24.Fat"]
        this.fat_min = row["25.Fat_MIN"]
        this.fat_max = row["26.Fat_MAX"]
        this.slm_soft_lean_mass = row["27.SLM(Soft Lean Mass)"]
        this.slm_min = row["28.SLM_MIN"]
        this.slm_max = row["29.SLM_MAX"]
        this.ffm_fat_free_mass = row["30.FFM(Fat Free Mass)"]
        this.ffm_min = row["31.ffm_min"]
        this.ffm_max = row["32.FFM_MAX"]
        this.smm_skeletal_muscle_mass = row["33.SMM(Skeletal Muscle Mass)"]
        this.smm_min = row["34.SMM_MIN"]
        this.smm_max = row["35.SMM_MAX"]
        this.pbf_percent_body_fat = row["36.PBF(Percent Body Fat)"]
        this.pbf_min = row["37.PBF_MIN"]
        this.pbf_max = row["38.PBF_MAX"]
        this.bmi = row["39.BMI"]
        this.bmi_min = row["40.BMI_MIN"]
        this.bmi_max = row["41.BMI_MAX"]
        this.segmental_water_ra = row["42.Segmental Water(RA)"]
        this.segmental_water_ra_min = row["43.Segmental Water(RA)_MIN"]
        this.segmental_water_ra_max = row["44.Segmental Water(RA)_MAX"]
        this.segmental_water_la = row["45.Segmental Water(LA)"]
        this.segmental_water_la_min = row["46.Segmental Water(LA)_MIN"]
        this.segmental_water_la_max = row["47.Segmental Water(LA)_MAX"]
        this.segmental_water_tr = row["48.Segmental Water(TR)"]
        this.segmental_water_tr_min = row["49.Segmental Water(TR)_MIN"]
        this.segmental_water_tr_max = row["50.Segmental Water(TR)_MAX"]
        this.segmental_water_rl = row["51.Segmental Water(RL)"]
        this.segmental_water_rl_min = row["52.Segmental Water(RL)_MIN"]
        this.segmental_water_rl_max = row["53.Segmental Water(RL)_MAX"]
        this.segmental_water_ll = row["54.Segmental Water(LL)"]
        this.segmental_water_ll_min = row["55.Segmental Water(LL)_MIN"]
        this.segmental_water_ll_max = row["56.Segmental Water(LL)_MAX"]
        this.ecw_tbw_total = row["57.ECW/TBW(Total)"]
        this.ecw_tbw_ra = row["58.ECW/TBW(RA)"]
        this.ecw_tbw_la = row["59.ECW/TBW(LA)"]
        this.ecw_tbw_tr = row["60.ECW/TBW(TR)"]
        this.ecw_tbw_rl = row["61.ECW/TBW(RL)"]
        this.ecw_tbw_ll = row["62.ECW/TBW(LL)"]
        this.segmental_lean_ra = row["63.Segmental Lean(RA)"]
        this.segmental_lean_ra_min = row["64.Segmental Lean(RA)_MIN"]
        this.segmental_lean_ra_max = row["65.Segmental Lean(RA)_MAX"]
        this.segmental_lean_la = row["66.Segmental Lean(LA)"]
        this.segmental_lean_la_min = row["67.Segmental Lean(LA)_MIN"]
        this.segmental_lean_la_max = row["68.Segmental Lean(LA)_MAX"]
        this.segmental_lean_tr = row["69.Segmental Lean(TR)"]
        this.segmental_lean_tr_min = row["70.Segmental Lean(TR)_MIN"]
        this.segmental_lean_tr_max = row["71.Segmental Lean(TR)_MAX"]
        this.segmental_lean_rl = row["72.Segmental Lean(RL)"]
        this.segmental_lean_rl_min = row["73.Segmental Lean(RL)_MIN"]
        this.segmental_lean_rl_max = row["74.Segmental Lean(RL)_MAX"]
        this.segmental_lean_ll = row["75.Segmental Lean(LL)"]
        this.segmental_lean_ll_min = row["76.Segmental Lean(LL)_MIN"]
        this.segmental_lean_ll_max = row["77.Segmental Lean(LL)_MAX"]
        this.body_cell_mass = row["78.Body Cell Mass"]
        this.bcm_min = row["79.BCM_MIN"]
        this.bcm_max = row["80.BCM_MAX"]
        this.bone_mineral_contents = row["81.Bone Mineral Contents"]
        this.bmc_min = row["82.BMC_MIN"]
        this.bmc_max = row["83.BMC_MAX"]
        this.ac = row["84.AC"]
        this.amc = row["85.AMC"]
        this.waist_cir = row["86.Waist Cir."]
        this.vfa = row["87.VFA"]
        this.bmr = row["88.BMR"]
        this.tbw_ffm = row["89.TBW/FFM"]
        this._1khz_ra_impedance = row["90.1khz-RA Impedance"]
        this._1khz_la_impedance = row["91.1khz-LA Impedance"]
        this._1khz_tr_impedance = row["92.1khz-TR Impedance"]
        this._1khz_rl_impedance = row["93.1khz-RL Impedance"]
        this._1khz_ll_impedance = row["94.1khz-LL Impedance"]
        this._5khz_ra_impedance = row["95.5khz-RA Impedance"]
        this._5khz_la_impedance = row["96.5khz-LA Impedance"]
        this._5khz_tr_impedance = row["97.5khz-TR Impedance"]
        this._5khz_rl_impedance = row["98.5khz-RL Impedance"]
        this._5khz_ll_impedance = row["99.5khz-LL Impedance"]
        this._50khz_ra_impedance = row["100.50khz-RA Impedance"]
        this._50khz_la_impedance = row["101.50khz-LA Impedance"]
        this._50khz_tr_impedance = row["102.50khz-TR Impedance"]
        this._50khz_rl_impedance = row["103.50khz-RL Impedance"]
        this._50khz_ll_impedance = row["104.50khz-LL Impedance"]
        this._250khz_ra_impedance = row["105.250khz-RA Impedance"]
        this._250khz_la_impedance = row["106.250khz-LA Impedance"]
        this._250khz_tr_impedance = row["107.250khz-TR Impedance"]
        this._250khz_rl_impedance = row["108.250khz-RL Impedance"]
        this._250khz_ll_impedance = row["109.250khz-LL Impedance"]
        this._500khz_ra_impedance = row["110.500khz-RA Impedance"]
        this._500khz_la_impedance = row["111.500khz-LA Impedance"]
        this._500khz_tr_impedance = row["112.500khz-TR Impedance"]
        this._500khz_rl_impedance = row["113.500khz-RL Impedance"]
        this._500khz_ll_impedance = row["114.500khz-LL Impedance"]
        this._1mhz_ra_impedance = row["115.1Mhz-RA Impedance"]
        this._1mhz_la_impedance = row["116.1Mhz-LA Impedance"]
        this._1mhz_tr_impedance = row["117.1Mhz-TR Impedance"]
        this._1mhz_rl_impedance = row["118.1Mhz-RL Impedance"]
        this._1mhz_ll_impedance = row["119.1Mhz-LL Impedance"]
        this._5khz_ra_reactance = row["120.5khz-RA Reactance"]
        this._5khz_la_reactance = row["121.5khz-LA Reactance"]
        this._5khz_tr_reactance = row["122.5khz-TR Reactance"]
        this._5khz_rl_reactance = row["123.5khz-RL Reactance"]
        this._5khz_ll_reactance = row["124.5khz-LL Reactance"]
        this._50khz_ra_reactance = row["125.50khz-RA Reactance"]
        this._50khz_la_reactance = row["126.50khz-LA Reactance"]
        this._50khz_tr_reactance = row["127.50khz-TR Reactance"]
        this._50khz_rl_reactance = row["128.50khz-RL Reactance"]
        this._50khz_ll_reactance = row["129.50khz-LL Reactance"]
        this._250khz_ra_reactance = row["130.250khz-RA Reactance"]
        this._250khz_la_reactance = row["131.250khz-LA Reactance"]
        this._250khz_tr_reactance = row["132.250khz-TR Reactance"]
        this._250khz_rl_reactance = row["133.250khz-RL Reactance"]
        this._250khz_ll_reactance = row["134.250khz-LL Reactance"]
        this._5khz_ra_phase_angle = row["135.5khz-RA Phase Angle"]
        this._5khz_la_phase_angle = row["136.5khz-LA Phase Angle"]
        this._5khz_tr_phase_angle = row["137.5khz-TR Phase Angle"]
        this._5khz_rl_phase_angle = row["138.5khz-RL Phase Angle"]
        this._5khz_ll_phase_angle = row["139.5khz-LL Phase Angle"]
        this._50khz_ra_phase_angle = row["140.50khz-RA Phase Angle"]
        this._50khz_la_phase_angle = row["141.50khz-LA Phase Angle"]
        this._50khz_tr_phase_angle = row["142.50khz-TR Phase Angle"]
        this._50khz_rl_phase_angle = row["143.50khz-RL Phase Angle"]
        this._50khz_ll_phase_angle = row["144.50khz-LL Phase Angle"]
        this._250khz_ra_phase_angle = row["145.250khz-RA Phase Angle"]
        this._250khz_la_phase_angle = row["146.250khz-LA Phase Angle"]
        this._250khz_tr_phase_angle = row["147.250khz-TR Phase Angle"]
        this._250khz_rl_phase_angle = row["148.250khz-RL Phase Angle"]
        this._250khz_ll_phase_angle = row["149.250khz-LL Phase Angle"]
        this.systolic = row["150.Systolic"]
        this.diastolic = row["151.Diastolic"]
        this.heart_rate = row["152.Heart Rate"]
        this.electrode = row["153.Electrode"]
        this.posture = row["154.Posture"]
        this.access = row["155.Access"]      
    } 
}


        