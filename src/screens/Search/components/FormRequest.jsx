import React, {useContext, useEffect, useState} from "react";
import './formRequest.css';
import {Context} from "../../../App";
import {useNavigate} from "react-router-dom";

function FormRequest() {
    const navigate = useNavigate()
    const {store} = useContext(Context)
    const [inn, setInn] = useState('')
    const [countDocument, setCountDocument] = useState('')
    const [dateSearchStart, setDateSearchStart] = useState('')
    const [dateSearchEnd, setDateSearchEnd] = useState('')
    const [innDirty, setInnDirty] = useState(false)
    const [countDocumentDirty, setCountDocumentDirty] = useState(false);
    const [formValid, setFormValid] = useState(false)
    const [dateSearchStartDirty, setDateSearchStartDirty] = useState(false)
    const [dateSearchEndDirty, setDateSearchEndDirty] = useState(false)
    const [innError, setInnError] = useState('ИНН пуст')
    const [countDocumentError, setCountDocumentError] = useState(
        'Обязательное поле'
    )
    const [dateSearchError, setDateSearchError] = useState(
        'Введите корректные данные '
    )

    const [maxfill, setMaxfill] = useState('')
    const [bisnessContext, setBisnessContext] = useState(null)
    const [mainRole, setMainRole] = useState('')
    const [riskFactors, setRiskFactors] = useState('')
    const [techNews, setTechNews] = useState('')
    const [announceCalendar, setAnnounceCalendar] = useState('')
    const [news, setNews] = useState('')
    const [tonality, setTonality] = useState('any')

    const [types, setType] = useState('text')
    const [arrows, setArrows] = useState('')

    useEffect(() => {
        if (innError || countDocumentError || dateSearchError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [innError, countDocumentError, dateSearchError])

    function chageType() {
        setType('date')
        setArrows('arrowmood')

    }

    const blurhandler = (e) => {
        if (e.target.name === 'inn') {
            setInnDirty(true)
        }

        var result = false;
        var innTest = inn;
        if (typeof inn === 'number') {
            innTest = inn.toString();
        } else if (typeof inn !== 'string') {
            innTest = '';
        }
        if (!innTest.length) {

            setInnError('ИНН пуст');
        } else if (/[^0-9]/.test(innTest)) {

            setInnError('ИНН может состоять только из цифр');
        } else if ([10, 12].indexOf(innTest.length) === -1) {

            setInnError('ИНН может состоять только из 10 или 12 цифр');
        } else {

            var checkDigit = function (innTest, coefficients) {
                var n = 0;
                for (var i in coefficients) {
                    n += coefficients[i] * innTest[i];
                }
                return parseInt(n % 11 % 10);
            };
            switch (innTest.length) {
                case 10:
                    var n10 = checkDigit(innTest, [
                        2,
                        4,
                        10,
                        3,
                        5,
                        9,
                        4,
                        6,
                        8
                    ]);
                    if (n10 === parseInt(innTest[9])) {
                        result = true;
                    }
                    break;
                case 12:
                    var n11 = checkDigit(innTest, [
                        7,
                        2,
                        4,
                        10,
                        3,
                        5,
                        9,
                        4,
                        6,
                        8
                    ]);
                    var n12 = checkDigit(innTest, [
                        3,
                        7,
                        2,
                        4,
                        10,
                        3,
                        5,
                        9,
                        4,
                        6,
                        8
                    ]);
                    if ((n11 === parseInt(innTest[10])) && (n12 === parseInt(innTest[11]))) {
                        result = true;
                    }
                    break;
                     default: console.log('default not')
            }
            if (!result) {
                setInnError('Введите корректные данные');
            } else 
                (setInnError(''))
        }

    }

    function innHandler(e) {
        setInn(e.target.value)
    }

    function countDocumentHandler(e) {
        setCountDocument(e.target.value)
        if (!e.target.value) {
            setCountDocumentError('Обязательное поле')
        } else if (1 <= parseInt(e.target.value) && parseInt(e.target.value) <= 1000) {
            setCountDocumentError('')
        } else {
            setCountDocumentError('Введите корректные данные')
        }

    }

    const blurCountDocument = (e) => {
        if (e.target.name === 'countDocument') {
            setCountDocumentDirty(true)
        }
    }

    const blurDateSearch = (e) => {
        setType('text')
        setArrows('')

        if (e.target.name === 'dateSearchEnd') {
            setDateSearchStartDirty(true)

        }
        if (e.target.name === 'dateSearchStart') {
            setDateSearchEndDirty(true)

        }

        if (((Date.parse(`${dateSearchEnd}`)) > (+(new Date()))) || ((Date.parse(`${dateSearchStart}`)) > (+(new Date()))) || ((Date.parse(`${dateSearchStart}`)) > (Date.parse(`${dateSearchEnd}`)))) {
            setDateSearchError('Введите корректные данные')
        } else if (typeof(dateSearchEnd) == 'string' && typeof(dateSearchStart) == 'string' && (dateSearchEnd !== '') && (dateSearchStart !== '')) {
            setDateSearchError('')
            console.log(dateSearchEnd)
            console.log(dateSearchStart)
        }
    }
    const changeDateSearch = (e) => {

        if (e.target.name === 'dateSearchEnd') {
            setDateSearchEnd(e.target.value)

        }
        if (e.target.name === 'dateSearchStart') {
            setDateSearchStart(e.target.value)
        }
    }
    const changeCheckboxSearch = (e) => {
        switch (e.target.name) {
            case 'maxfill':
                setMaxfill(e.target.checked)
                break;
            case 'bisnessContext':
                setBisnessContext(e.target.checked)
                break;
            case 'mainRole':
                setMainRole(e.target.checked)
                break;
            case 'riskFactors':
                setRiskFactors(e.target.checked)
                break;
            case 'techNews':
                setTechNews(e.target.checked)
                break;
            case 'announceCalendar':
                setAnnounceCalendar(e.target.checked)
                break;
            case 'news':
                setNews(e.target.checked)
                break;
                 default: console.log('default not')
        }

    }

    function sendSearch(e) {
        e.preventDefault()

        const searchcompanyBody = {
            issueDateInterval: {
                startDate: new Date(dateSearchStart),
                endDate: new Date(dateSearchEnd)
            },
            searchContext: {

                targetSearchEntitiesContext: {
                    targetSearchEntities: [
                        {
                            type: "company",
                            sparkId: null,
                            entityId: null,
                            inn: inn,
                            maxFullness: maxfill,
                            inBusinessNews: bisnessContext
                        }
                    ],
                    onlyMainRole: mainRole,
                    tonality: tonality,
                    onlyWithRiskFactors: riskFactors,
                    riskFactors: {
                        and: [],
                        or: [],
                        not: []
                    },
                    themes: {
                        and: [],
                        or: [],
                        not: []
                    }
                },
                themesFilter: {
                    and: [],
                    or: [],
                    not: []
                }
            },
            searchArea: {
                includedSources: [],
                excludedSources: [],
                includedSourceGroups: [],
                excludedSourceGroups: []
            },
            attributeFilters: {
                excludeTechNews: techNews,
                excludeAnnouncements: announceCalendar,
                excludeDigests: news
            },
            similarMode: "duplicates",
            limit: countDocument,
            sortType: "sourceInfluence",
            sortDirectionType: "desc",
            intervalType: "month",
            histogramTypes: ["totalDocuments", "riskFactors"]
        }
        store.setSearchcompanyBody(searchcompanyBody)
        console.log(searchcompanyBody)
        navigate('/resultsearch')
    }

    const tonalityHandle = (e) => {
        setTonality(e.target.value)
    }
    return (
        <form name="formSearchPage">
            <div className="formSearchPage">
                <div className="blockRequest">
                    <div className="formSelect">
                        <label className="labelLogin font-inter" htmlFor="login">ИНН компании
                            <span className="footnote">*</span>
                        </label>
                        <input
                            className='loginInput '
                            type='string'
                            name="inn"
                            placeholder='10 цифр'
                            value={inn}
                            onChange={e => innHandler(e)}
                            onBlur={e => blurhandler(e)}/> {
                            (innDirty && innError) &&< div style = {{color:'red'}} > {
                                innError
                            }
                            </div>
                        }
                        <label className="formSelect__label font-inter" htmlFor="mood">Тональность</label>
                        <select
                            name="mood"
                            id="mood-select"
                            className="formSelect__mood"
                            onChange={tonalityHandle}>
                            <option value="any">Любая</option>
                            <option value="positive">Позитивная</option>
                            <option value="negative">Негативная</option>
                        </select>
                        <label className="labelLogin font-inter" htmlFor="login">Количество документов в выдаче
                            <span className="footnote">*</span>
                        </label>
                        <input
                            className='loginInput '
                            type='number'
                            name="countDocument"
                            placeholder='От 1 до 1000'
                            value={countDocument}
                            onChange={e => countDocumentHandler(e)}
                            onBlur={e => blurCountDocument(e)}/> {
                            (countDocumentDirty && countDocumentError) &&< div style = {{color:'red'}} > {
                                countDocumentError
                            }
                            </div>
                        }

                        <div className="dateBlock">
                            <div className="login">
                                <label className="labelLogin font-inter" htmlFor="login">Диапазон поиска<span className="footnote">*</span>
                                </label>
                                <input
                                    className={` loginInput  arrow ${arrows}`}
                                    type={types}
                                    name="dateSearchStart"
                                    placeholder="Дата начала"
                                    value={dateSearchStart}
                                    onFocus={chageType}
                                    onBlur={blurDateSearch}
                                    onChange={changeDateSearch}/>

                            </div>
                            <div className="login loginDataEnd">
                                <label className="labelLogin font-inter" htmlFor="login"><br/></label>
                                <input
                                    className={` loginInput  arrow ${arrows}`}
                                    type={types}
                                    name="dateSearchEnd"
                                    placeholder="Дата конца"
                                    value={dateSearchEnd}
                                    onFocus={chageType}
                                    onBlur={blurDateSearch}
                                    onChange={changeDateSearch}/>
                            </div>
                        </div>
                        {
                            (dateSearchStartDirty && dateSearchEndDirty) && dateSearchError &&< div style = {{color:'red'}} > {
                                dateSearchError
                            }
                            </div>
                        }

                    </div>

                    <div className='formCheckbox'>

                        <label className='font-inter'><input
                            className="checkbox"
                            type="checkbox"
                            name="maxfill"
                            checked={maxfill}
                            onChange={changeCheckboxSearch}/>
                            <span className="fake"></span>
                            Признак максимальной полноты</label>
                        <label className='font-inter'><input
                            className="checkbox"
                            type="checkbox"
                            name="bisnessContext"
                            checked={bisnessContext}
                            onChange={changeCheckboxSearch}/>
                            <span className="fake"></span>
                            Упоминания в бизнес-контексте</label>
                        <label className='font-inter'><input
                            className="checkbox"
                            type="checkbox"
                            name="mainRole"
                            checked={mainRole}
                            onChange={changeCheckboxSearch}/>
                            <span className="fake"></span>
                            Главная роль в публикации</label>
                        <label className='font-inter'><input
                            className="checkbox"
                            type="checkbox"
                            name="riskFactors"
                            checked={riskFactors}
                            onChange={changeCheckboxSearch}/>
                            <span className="fake"></span>
                            Публикации только с риск-факторами
                        </label>
                        <label className='font-inter'><input
                            className="checkbox"
                            type="checkbox"
                            name="techNews"
                            checked={techNews}
                            onChange={changeCheckboxSearch}/>
                            <span className="fake"></span>
                            Включать технические новости рынков
                        </label>
                        <label className='font-inter'><input
                            className="checkbox"
                            type="checkbox"
                            name="announceCalendar"
                            checked={announceCalendar}
                            onChange={changeCheckboxSearch}/>
                            <span className="fake"></span>
                            Включать анонсы и календари
                        </label>
                        <label className='font-inter'><input
                            className="checkbox"
                            type="checkbox"
                            name="news"
                            checked={news}
                            onChange={changeCheckboxSearch}/>
                            <span className="fake"></span>
                            Включать сводки новостей
                        </label>
                    </div>
                </div>
                <div className="blockButtonSearch">
                    <button
                        className="blockButtonSearch__button font-medium"
                        disabled={!formValid}
                        onClick={sendSearch}>Поиск</button>
                    <p className="blockButtonSearch__text font-inter">* Обязательные к заполнению поля</p>
                </div>
            </div>
        </form>

    )
}
export default FormRequest
