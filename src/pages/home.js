import "./home.css";
import { useEffect, useState } from "react";
import { CSVLink } from 'react-csv';
function Home() {
    const cursorMoverRight = (sec, index) => {

        const nextField = document.getElementById(sec.split(' ').join('') + (index + 1).toString());
        if (nextField !== null) nextField.select();
    }
    const cursorMoverLeft = (sec, index) => {
        const previousField = document.getElementById(sec.split(' ').join('') + (index - 1).toString());
        if (previousField !== null) previousField.select();
    }
    // const generalMovement = (cellVal, index, sec) => {
    //     if (cellVal.length === 1) cursorMoverRight(sec, index);
    //     if (cellVal === '') cursorMoverLeft(sec, index);
    // }
    // const generalMovementTwoChar = (cellVal, index, sec) => {
    //     if (cellVal.length === 2) cursorMoverRight(sec, index);
    //     if (cellVal === '') cursorMoverLeft(sec, index);
    // }
    const newData = (cellVal, index, prevArr) => {
        const newArr = [...prevArr];
        if (cellVal === '') newArr[index] = '';
        if (parseInt(cellVal) < 10 && parseInt(cellVal) > -1) newArr[index] = parseInt(cellVal);
        return newArr;
    }
    const handleDateValueInField = (date) => {
        const value = date.split('/');
        const newValue = [];
        value.forEach(element => {
            newValue.unshift(element)
        });
        return newValue.join('-')
    }
    const valueInputField = (sec, index) => {
        switch (sec) {
            case 'Bio Total':
                if (bioTotal[index] === '') return '';
                return bioTotal[index]
            case 'Life Style Total':
                if (lifeStyleTotal[index] === '') return '';
                return lifeStyleTotal[index]
            case 'Med Total':
                if (medTotal[index] === '') return '';
                return medTotal[index]
            case 'Blood Total':
                if (bloodTotal[index] === '') return '';
                return bloodTotal[index]
            case 'Total Risks':
                if (totalRisk[index] === '') return '';
                return totalRisk[index]
            case 'Rec':
                if (recommendation[index] === '') return '';
                return recommendation[index]
            default:
                return 0
        }
    }
    const moveToField = (event, sec, index) => {
        const secList = [
            'Patient ID', 'Bio Total',
            'Life Style Total', 'Med Total',
            'Blood Total', 'Total Risks',
            'Rec'
        ]
        if (event.keyCode === 37) {
            cursorMoverLeft(sec, index);
        }
        if (event.keyCode === 39 || event.keyCode === 13) {
            cursorMoverRight(sec, index);
            if (index === 3 && sec !== 'Rec') {
                secList.forEach((elem, i) => {
                    if (elem === sec) {
                        cursorMoverRight(secList[i + 1], -1);
                    }
                })
            }
        }
    }
    const labData = [
        { type: 'low wage', number: 101 }
        , { type: 'low wage', number: 102 }
        , { type: 'low wage', number: 103 }
        , { type: 'low wage', number: 104 }
        , { type: 'High wage', number: 105 }
        , { type: 'low wage', number: 106 }
        , { type: 'low wage', number: 107 }
        , { type: 'low wage', number: 108 }
        , { type: 'low wage', number: 109 }
        , { type: 'low wage', number: 110 }
        , { type: 'low wage', number: 111 }
        , { type: 'High wage', number: 112 }
        , { type: 'High wage', number: 113 }
        , { type: 'low wage', number: 114 }
        , { type: 'High wage', number: 115 }
        , { type: 'low wage', number: 116 }
        , { type: 'High wage', number: 117 }
        , { type: 'low wage', number: 118 }
        , { type: 'low wage', number: 119 }
        , { type: 'low wage', number: 120 }
        , { type: 'High wage', number: 121 }
        , { type: 'High wage', number: 122 }
        , { type: 'low wage', number: 123 }
        , { type: 'low wage', number: 124 }
        , { type: 'High wage', number: 125 }
        , { type: 'low wage', number: 126 }
        , { type: 'low wage', number: 127 }
        , { type: 'High wage', number: 128 }
        , { type: 'High wage', number: 129 }
        , { type: 'High wage', number: 130 }
        , { type: 'low wage', number: 131 }
        , { type: 'low wage', number: 132 }
        , { type: 'low wage', number: 133 }
        , { type: 'low wage', number: 134 }
        , { type: 'High wage', number: 135 }
        , { type: 'low wage', number: 136 }
        , { type: 'low wage', number: 137 }
        , { type: 'low wage', number: 138 }
        , { type: 'low wage', number: 139 }
        , { type: 'low wage', number: 140 }
        , { type: 'low wage', number: 141 }
        , { type: 'High wage', number: 142 }
        , { type: 'High wage', number: 143 }
        , { type: 'High wage', number: 144 }
        , { type: 'High wage', number: 145 }
        , { type: 'low wage', number: 146 }
        , { type: 'low wage', number: 147 }
        , { type: 'High wage', number: 148 }
        , { type: 'High wage', number: 149 }
        , { type: 'low wage', number: 150 }
        , { type: 'low wage', number: 151 }
        , { type: 'low wage', number: 152 }
        , { type: 'low wage', number: 153 }
        , { type: 'low wage', number: 154 }
        , { type: 'low wage', number: 155 }
        , { type: 'low wage', number: 156 }
        , { type: 'High wage', number: 157 }
        , { type: 'low wage', number: 158 }
        , { type: 'low wage', number: 159 }
        , { type: 'low wage', number: 160 }
        , { type: 'low wage', number: 161 }
        , { type: 'High wage', number: 162 }
        , { type: 'High wage', number: 163 }
        , { type: 'High wage', number: 164 }
        , { type: 'low wage', number: 165 }
        , { type: 'low wage', number: 167 }
        , { type: 'low wage', number: 168 }
        , { type: 'High wage', number: 169 }
        , { type: 'low wage', number: 170 }
        , { type: 'High wage', number: 171 }
        , { type: 'low wage', number: 172 }
        , { type: 'High wage', number: 173 }
        , { type: 'low wage', number: 174 }
        , { type: 'low wage', number: 175 }
        , { type: 'low wage', number: 176 }
        , { type: 'low wage', number: 177 }
        , { type: 'High wage', number: 178 }
        , { type: 'High wage', number: 179 }
        , { type: 'High wage', number: 180 }
        , { type: 'High wage', number: 181 }
        , { type: 'low wage', number: 182 }
        , { type: 'High wage', number: 183 }
        , { type: 'High wage', number: 184 }
        , { type: 'low wage', number: 185 }
        , { type: 'low wage', number: 186 }
        , { type: 'low wage', number: 187 }
        , { type: 'low wage', number: 188 }
        , { type: 'low wage', number: 189 }
        , { type: 'High wage', number: 190 }
        , { type: 'low wage', number: 191 }
        , { type: 'low wage', number: 192 }
        , { type: 'low wage', number: 193 }
        , { type: 'low wage', number: 194 }
        , { type: 'low wage', number: 195 }
        , { type: 'low wage', number: 196 }
    ];
    
    //----------------------------------------------//
    //-------------upper sec states-----------------//
    //----------------------------------------------//

    const [labNum, setLabNum] = useState('');
    const handleLabNum = (e) => {
        let cellVal = e.target.value;
        if (cellVal !== '') cellVal = parseInt(cellVal);
        handleHighWage(cellVal);
        if (cellVal.toString().length < 4) setLabNum(cellVal);
    }
    const [workerId, setWorkerId] = useState('');
    const handleWorkerId = (e) => {
        const value = (e.target.value).toUpperCase();
        if (value.length < 4) setWorkerId(value);
    }
    const [date, setDate] = useState('');
    const handleDate = (e) => {
        const value = (e.target.value).split('-');
        const newValue = [];
        value.forEach(element => {
            newValue.unshift(element)
        });
        setDate(newValue.join('/'));
    }
    const [time, setTime] = useState('');
    const handleTime = (e) => {
        const value = e.target.value;
        setTime(value);
    }

    const [highWage, setHighWage] = useState('');
    const handleHighWage = (cellVal) => {
        let finalVal = '';

        labData.forEach(({ type, number }) => {
            if (number === cellVal) {
                if (type === 'High wage') finalVal = 1;
                else finalVal = 0;
            }
        });

        setHighWage(finalVal);
    }


    //----------------------------------------------//
    //---------------lab sec states ----------------//
    //----------------------------------------------//


    const [bioTotal, setBioTotal] = useState(['', '', '', '']);
    const handleBioTotal = (e, index) => {
        let cellVal = e.target.value;
        const newArr = [...bioTotal];
        newArr[index] = cellVal;
        //generalMovement(cellVal, index, 'Bio Total');
        setBioTotal(newArr);
    }
    const [lifeStyleTotal, setLifeStyleTotal] = useState(['', '', '', '']);
    const handleLifeStyleTotal = (e, index) => {
        let cellVal = e.target.value;
        const newArr = [...lifeStyleTotal];
        newArr[index] = cellVal;
        //generalMovement(cellVal, index, 'Life Style Total');
        setLifeStyleTotal(newArr);
    }
    const [medTotal, setMedTotal] = useState(['', '', '', '']);
    const handleMedTotal = (e, index) => {
        let cellVal = e.target.value;
        const newArr = [...medTotal];
        newArr[index] = cellVal;
        //generalMovementTwoChar(cellVal, index, 'Med Total');
        setMedTotal(newArr);
    }
    const [bloodTotal, setBloodTotal] = useState(['', '', '', '']);
    const handleBloodTotal = (e, index) => {

        let cellVal = e.target.value;
        const newArr = [...bloodTotal];
        newArr[index] = cellVal;
        //generalMovement(cellVal, index, 'Blood Total');
        setBloodTotal(newArr);
    }
    const [totalRisk, setTotalRisk] = useState(['', '', '', '']);
    const handleTotalRisk = (e, index) => {
        let cellVal = e.target.value;
        const newArr = [...totalRisk];
        newArr[index] = cellVal;

        setTotalRisk(newArr);
        //generalMovementTwoChar(cellVal, index, 'Total Risks')
    }
    const [recommendation, setRecommendation] = useState(['', '', '', '']);
    const handleRecommendation = (e, index) => {
        let cellVal = e.target.value;
        if (parseInt(cellVal) > 2) cellVal = 2;
        if (parseInt(cellVal) < 0) cellVal = 0;
        //generalMovement(cellVal, index, 'Rec');
        setRecommendation(newData(cellVal, index, recommendation));
    }
    //----------------------------------------------//
    //---------------- table sec -------------------//
    //----------------------------------------------//
    const [dataTable, setDataTable] = useState([]);
    const [csv, setCsv] = useState('');
    const handleReset = () => {
        localStorage.removeItem('psac');
        setLabNum('');
        setWorkerId('');
        setHighWage('');
        setTime('');
        setDate('');
        setBioTotal(['', '', '', '']);
        setLifeStyleTotal(['', '', '', '']);
        setMedTotal(['', '', '', '']);
        setBloodTotal(['', '', '', '']);
        setTotalRisk(['', '', '', '']);
        setRecommendation(['', '', '', '']);
        setCsv('');
        setDataTable([]);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const dataForCsv = [...dataTable];

        const patientID = [1, 2, 3, 4];
        [0, 1, 2, 3].forEach((elm, i) => {
            let timeFormat = time.split(':').join('h');
            timeFormat += 'min';
            dataForCsv.push([
                labNum, patientID[i], workerId, highWage,
                timeFormat, date, bioTotal[i], lifeStyleTotal[i],
                medTotal[i], bloodTotal[i], totalRisk[i],
                recommendation[i]
            ]);
        });
        setLabNum('');
        setWorkerId('');
        setHighWage('');
        setTime('');
        setDate('');
        setBioTotal(['', '', '', '']);
        setLifeStyleTotal(['', '', '', '']);
        setMedTotal(['', '', '', '']);
        setBloodTotal(['', '', '', '']);
        setTotalRisk(['', '', '', '']);
        setRecommendation(['', '', '', '']);
        //medicalLabID,patientID,workerID,highWage,time,date,bioTotal,lifestyleTotal,medTotal,bloodTotal,totalRisk,Rec\n
        let csvFormat = 'medicalLabID,patientID,workerID,highWage,time,date,bioTotal,lifestyleTotal,medTotal,bloodTotal,totalRisk,Rec\n';
        let textFormt = '';
        dataForCsv.forEach((row, i) => {
            textFormt += row.join(',');
            textFormt += ',';
            csvFormat += row.join(',');
            csvFormat += '\n';
        });

        localStorage.setItem('psac', textFormt);

        setCsv(csvFormat);
        setDataTable(dataForCsv);
    }
    const currentDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0'); // add leading zero if necessary
        const minutes = String(now.getMinutes()).padStart(2, '0'); // add leading zero if necessary
        const seconds = String(now.getSeconds()).padStart(2, '0'); // add leading zero if necessary
        const formattedDate = `DATE${year}-${month}-${day}TIME${hours}:${minutes}:${seconds}`;
        return formattedDate;
    }
    useEffect(() => {
        const storedText = localStorage.getItem('psac');
        if (storedText) {
            const splitedText = storedText.split(',');

            const textNum = [];
            const row = [];
            splitedText.forEach((elem, i) => {
                if (/^\d+$/.test(elem)) row.push(parseInt(elem));
                else row.push(elem);
                if ((i + 1) % 12 === 0) {
                    textNum.push([...row]);
                    row.length = 0;
                }
            });


            let csvFormat = 'medicalLabID,patientID,workerID,highWage,time,date,bioTotal,lifestyleTotal,medTotal,bloodTotal,totalRisk,Rec\n';
            textNum.forEach((row, i) => {
                csvFormat += row.join(',');
                csvFormat += '\n';
            });
            if (csv === '') setCsv(csvFormat);
            if (dataTable.length === 0) setDataTable(textNum);
        }

    }, [dataTable,csv])
    return (
        <div className="Home">
            <form className="workerInput" onSubmit={handleSubmit}>
                <div className="reset" onClick={handleReset}>ResetBoard</div>
                <h2>Worker Details:</h2>

                <div className="inputFields">

                    <input
                        placeholder="Lab Number"
                        type="number"
                        value={labNum}
                        onChange={handleLabNum}
                    ></input>
                    <input
                        id="WorderID1"
                        placeholder="Worder ID"
                        type="text"
                        value={workerId}
                        onChange={handleWorkerId}
                    >
                    </input>
                    <input
                        placeholder="Date"
                        type="date"
                        value={handleDateValueInField(date)}
                        onChange={handleDate}
                    >
                    </input>
                    <input
                        placeholder="Time"
                        type="time"
                        value={time}
                        onChange={handleTime}
                    >
                    </input>
                    <div id="HighWage">
                        High wage: {highWage}
                    </div>
                </div>
                <h2>Lab Details</h2>
                <div className="inputFieldLab">
                    {
                        [
                            'Bio Total',
                            'Life Style Total',
                            'Med Total',
                            'Blood Total',
                            'Total Risks',
                            'Rec'
                        ].map(
                            (sec, i) =>
                                <label key={i.toString()} id={sec}>
                                    {`${sec} : `}
                                    {
                                        [0, 1, 2, 3].map((elem, j) =>
                                            <input key={j.toString()}
                                                id={sec.split(' ').join('') + j.toString()}
                                                placeholder={sec}
                                                type="number"
                                                value={valueInputField(sec, j)}
                                                onKeyDown={(event) => moveToField(event, sec, j)}
                                                onChange={
                                                    (e) => {
                                                        switch (sec) {
                                                            case 'Bio Total':
                                                                handleBioTotal(e, j);
                                                                break;
                                                            case 'Life Style Total':
                                                                handleLifeStyleTotal(e, j);
                                                                break;
                                                            case 'Med Total':
                                                                handleMedTotal(e, j);
                                                                break;
                                                            case 'Blood Total':
                                                                handleBloodTotal(e, j);
                                                                break;
                                                            case 'Total Risks':
                                                                handleTotalRisk(e, j);
                                                                break;
                                                            case 'Rec':
                                                                handleRecommendation(e, j);
                                                                break;
                                                            default:
                                                                console.log('Error in switch case sec.');
                                                                break;
                                                        }

                                                    }

                                                }
                                            >
                                            </input>)}
                                </label>)
                    }
                </div>
                <div id="button" onClick={handleSubmit}>Add</div>
            </form>

            <div className="viewer">

                <table >
                    <thead>
                        <tr>
                            <th>medicalLabID</th>
                            <th>patientID</th>
                            <th>workerID</th>
                            <th>highWage</th>
                            <th>time</th>
                            <th>date</th>
                            <th>bioTotal</th>
                            <th>lifestyleTotal</th>
                            <th>medTotal</th>
                            <th>bloodTotal</th>
                            <th>totalRisk</th>
                            <th>Rec</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataTable.map(
                                (row, j) => <tr key={(j).toString()}>
                                    {
                                        row.map((data, i) =>
                                            <td key={(i + j).toString()}>{data}</td>
                                        )
                                    }
                                </tr>)}
                    </tbody>
                </table>
                <CSVLink className="export" data={csv} filename={`$studiesData-${currentDate()}`}>ExportCsv</CSVLink>

            </div>


        </div>
    );
}

export default Home;