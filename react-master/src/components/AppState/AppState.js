export function createAppStore(){
    return {
        availableUnit: [],
        addAvailableUnit(unit){
            this.availableUnit.push(
                ...unit
            )
        },
        removeUnit(unitcode){
            this.availableUnit = this.availableUnit.filter(unit => unit.unitcode !== unitcode)
        },
        unitEnrolled:[],
        addUnitEnrolled(unit){
            this.unitEnrolled.push(
                unit
            )
        },
        removeEnrolledUnit(unitEnrolled){
            this.unitEnrolled = this.unitEnrolled.filter(unit => unit.unitcode !== unitEnrolled.unitcode)
            this.availableUnit.push(
                unitEnrolled
            )

        },

        unitTimetable:[],
        setUnitTimetable(unit){
            this.unitTimetable.splice(0,this.unitTimetable.length)
            this.unitTimetable.push(
                ...unit
            )
        },
        emptyUnitTimetable(unitEnrolled){
            this.unitTimetable = this.unitTimetable.filter(unit => unit.unitcode !== unitEnrolled.unitcode)
        },
        selectedTimetable:[],
        addSelectedTimetable(units){
            const index = this.selectedTimetable.findIndex(unit=> unit.unitcode === units.unitcode )
            console.log(index)
            if(index < 0){
                this.selectedTimetable.push(
                    units
                )
            }
            else{
                this.selectedTimetable[index] = units
            }
            console.log(...this.selectedTimetable)

        },
        authentication: true,
        setAuth(connected){
            this.authentication =  connected
        },

        studentSemesterUnit:[],
        getStudentSemesterUnit(units){
            this.studentSemesterUnit.push(
                ...units
            )
        }

    }
}

