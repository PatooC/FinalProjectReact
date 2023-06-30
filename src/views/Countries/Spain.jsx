import Card from '../../components/Card';
import { getSpanishUniversities } from '../../api/Universities'
import Footer from '../../components/Footer';
import NavbarAltern from '../../components/NavbarAltern';
import { useEffect, useState } from 'react';
import Search from '../../components/Search';
import "/Users/Pato/Desktop/Programación/ProyectoFinalCurso/src/index.css"

const Spain = () => {
    const [loading, setLoading] = useState(false);
    const [Unis, setUnis] = useState([]);
    const [error, setError] = useState({ isError: false, message: "Can't connect to API."})
    const [search, setSearch] = useState({input: '', number: 10})

    
    const getSpanishUniversitiesFromAPI = async () => {
        try {
            const UnisNoFilter = await getSpanishUniversities();
            setLoading(false)

            const Unis = UnisNoFilter.slice([[ UnisNoFilter.length / 2]])

            setUnis(Unis)
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError({isError: true, message: "Sorry, can't connect to API."})
        }
    };
    
    
    useEffect(() => {
        getSpanishUniversitiesFromAPI()
    }, []);
    
    

    const render = () => {
        if(loading === true){
            return(
                <div className="d-flex justify-content-center">
                    <div class="spinner-grow" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            )
        }
        if(error.isError === true){
            return(
                <div className="d-flex justify-content-center ">
                    <div className="bg-dark bg-opacity-50">
                        <h1 className="fs-1 fw-bold text-white">{error.message}</h1>
                    </div>
                </div>
            )
        }
        if(Unis.length > 0){

            const searchUnis = Unis.filter( uni => {
                if(search === ''){
                    return uni
                }
                if(uni.name.toLowerCase().includes(search.input.toLowerCase())){
                    return uni
                }
            })

            if(searchUnis.length > 0){
                const allUniversities = searchUnis.map(Uni => (
                    <Card 
                        name={Uni.name}
                        web_pages={Uni.web_pages} 
                        country={Uni.country}
                    />
                ))
                return allUniversities;
            } else {
                return(
                    <>

                    </>
                )
            }
        }
    }


    return(
        <>
            <NavbarAltern/>
            <div className='unique-bg-wrap'>
                <Search setSearch={setSearch}/>
                <div>
                    <br />
                </div>
                <div className="card-wrap">
                        {render()}
                </div>
            </div>      
        </>
    )
};


export default Spain