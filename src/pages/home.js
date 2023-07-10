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
        { type: 'low wage', number: 1 },
        { type: 'low wage', number: 2 },
        { type: 'low wage', number: 3 },
        { type: 'low wage', number: 4 },
        { type: 'High wage', number: 5 },
        { type: 'low wage', number: 6 },
        { type: 'low wage', number: 7 },
        { type: 'low wage', number: 8 },
        { type: 'low wage', number: 9 },
        { type: 'High wage', number: 10 },
        { type: 'low wage', number: 11 },
        { type: 'High wage', number: 12 },
        { type: 'High wage', number: 13 },
        { type: 'low wage', number: 14 },
        { type: 'low wage', number: 15 },
        { type: 'low wage', number: 16 },
        { type: 'High wage', number: 17 },
        { type: 'low wage', number: 18 },
        { type: 'High wage', number: 19 },
        { type: 'low wage', number: 20 },
        { type: 'High wage', number: 21 },
        { type: 'High wage', number: 22 },
        { type: 'High wage', number: 23 },
        { type: 'low wage', number: 24 },
        { type: 'low wage', number: 25 },
        { type: 'low wage', number: 26 },
        { type: 'low wage', number: 27 },
        { type: 'High wage', number: 28 },
        { type: 'low wage', number: 29 },
        { type: 'High wage', number: 30 },
        { type: 'High wage', number: 31 },
        { type: 'High wage', number: 32 },
        { type: 'low wage', number: 33 },
        { type: 'low wage', number: 34 },
        { type: 'High wage', number: 35 },
        { type: 'low wage', number: 36 },
        { type: 'High wage', number: 37 },
        { type: 'low wage', number: 38 },
        { type: 'High wage', number: 39 },
        { type: 'High wage', number: 40 },
        { type: 'High wage', number: 41 },
        { type: 'low wage', number: 42 },
        { type: 'low wage', number: 43 },
        { type: 'High wage', number: 44 },
        { type: 'low wage', number: 45 },
        { type: 'low wage', number: 46 },
        { type: 'low wage', number: 47 },
        { type: 'High wage', number: 48 },
        { type: 'low wage', number: 49 },
        { type: 'High wage', number: 50 },
        { type: 'low wage', number: 51 },
        { type: 'low wage', number: 52 },
        { type: 'low wage', number: 53 },
        { type: 'High wage', number: 54 },
        { type: 'low wage', number: 55 },
        { type: 'High wage', number: 56 },
        { type: 'low wage', number: 57 },
        { type: 'low wage', number: 58 },
        { type: 'low wage', number: 59 },
        { type: 'High wage', number: 60 },
        { type: 'low wage', number: 61 },
        { type: 'High wage', number: 62 },
        { type: 'High wage', number: 63 },
        { type: 'low wage', number: 64 },
        { type: 'High wage', number: 65 },
        { type: 'High wage', number: 66 },
        { type: 'High wage', number: 67 },
        { type: 'High wage', number: 68 },
        { type: 'High wage', number: 69 },
        { type: 'low wage', number: 70 },
        { type: 'low wage', number: 71 },
        { type: 'low wage', number: 72 },
        { type: 'High wage', number: 73 },
        { type: 'High wage', number: 74 },
        { type: 'low wage', number: 75 },
        { type: 'High wage', number: 76 },
        { type: 'low wage', number: 77 },
        { type: 'High wage', number: 78 },
        { type: 'low wage', number: 79 },
        { type: 'High wage', number: 80 },
        { type: 'low wage', number: 81 },
        { type: 'low wage', number: 82 },
        { type: 'low wage', number: 83 },
        { type: 'High wage', number: 84 },
        { type: 'High wage', number: 85 },
        { type: 'low wage', number: 85 },
        { type: 'low wage', number: 86 },
        { type: 'low wage', number: 87 },
        { type: 'low wage', number: 88 },
        { type: 'High wage', number: 89 },
        { type: 'High wage', number: 90 },
        { type: 'High wage', number: 91 },
        { type: 'High wage', number: 92 },
        { type: 'low wage', number: 93 },
        { type: 'High wage', number: 94 },
        { type: 'High wage', number: 96 },
    ];
    //----------------------------------------------//
    //-------------upper sec states-----------------//
    //----------------------------------------------//

    const [labNum, setLabNum] = useState('');
    const handleLabNum = (e) => {
        let cellVal = e.target.value;
        if (parseInt(cellVal) > 96) cellVal = 99;
        if (parseInt(cellVal) < 1) cellVal = 1;
        // if (cellVal.length === 2) {
        //     generalMovementTwoChar(cellVal, 0, 'Worder ID')
        // }
        if (cellVal !== '') cellVal = parseInt(cellVal);
        handleHighWage(cellVal);
        if (cellVal.toString().length < 3) setLabNum(cellVal);
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
            setCsv(csvFormat);
            setDataTable(textNum);
        }

    }, [dataTable])
    return (
        <div className="Home">
            <form className="workerInput" onSubmit={handleSubmit}>
                <h2>Worker Details:</h2>

                <div className="inputFields">
                    <div className="reset" onClick={handleReset}>ResetBoard</div>
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