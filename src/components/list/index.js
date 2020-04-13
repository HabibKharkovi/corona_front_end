import React, {useState, useEffect} from "react";
import MaterialTable from 'material-table'


// { title: 'Country', field: 'country' },
// { title: 'Total Cases', field: 'totalCases' },
// { title: 'Total Deaths', field: 'totalDeaths' },
// { title: 'New Death', field: 'newDeath' },
// { title: 'Total Recovered', field: 'totalRecovered' },
// { title: 'Active Cases', field: 'activeCases' },
// { title: 'Serious Cases', field: 'seriousCases' },
// { title: 'Tot Cases/1M pop', field: 'totalCasesperOneMillionPopulation' },

export default function List() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
    fetch('https://coronavirusapi.netlify.com/.netlify/functions/api')
        .then(resp => resp.json())
        .then(data => setCountries(data));
    }, [])

    console.log(countries)
    return (
      <div className="container">
          <MaterialTable
            title=""
            options= {{
                pageSize: 30,
                pageSizeOptions: [20, 30, 50],
                sorting: true
            }}
            columns={[
                { title: 'Country', field: 'country' },
                { title: 'New Cases', field: 'newCases', type: 'numeric'},
                { title: 'New Death', field: 'newDeath', type: 'numeric'},
                { title: 'Total Cases', field: 'totalCases', type: 'numeric'},
                { title: 'Total Deaths', field: 'totalDeaths', type: 'numeric'},
                { title: 'Active Cases', field: 'activeCases', type: 'numeric'},
                { title: 'Total Recovered', field: 'totalRecovered', type: 'numeric'},
                { title: 'Serious Cases', field: 'seriousCases', type: 'numeric'},
            ]}
            data={countries}
            detailPanel={[
            {
                tooltip: 'Show Name',
                render: rowData => {
                return (
                    <div
                    style={{
                        fontSize: 100,
                        textAlign: 'center',
                        color: 'white',
                        backgroundColor: '#43A047',
                    }}
                    >
                    {rowData.name}
                    </div>
                )
                },
            }
            ]}
        />
      </div>
    )
  }
  