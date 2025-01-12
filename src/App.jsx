import './App.css'
import WordData from './WordData.jsx'

function App() {
    const wordSections = WordData.map((data, index) => {
      return (
          <>
          <div className={"row word-meaning "}>
              <div className={"col scroll-fade-in"}>
                  <div className={"row"}>
                      <div className={"col"}>
                          <div className={"card "}>
                              <div className={"card-body"}>
                                  <h3 className={"display-5"}>{data.sectionTitle}</h3>
                              </div>
                          </div>

                      </div>
                  </div>
                  <div className={"row"}>
                      <div className={"col scroll-fade-in"}>
                          <img src={data.sectionPicture} className="img-fluid" alt="Responsive image"/>
                      </div>
                  </div>
              </div>

              <div className={"col scroll-fade-in word-meaning-content"}>
                  <div className={"row "}>
                      <div className={"col d-flex justify-content-start"}>
                          <div className={"card"}>
                              <div className={"card-body"}>
                                  <p>
                                      {data.sectionTextContent}
                                  </p>
                              </div>

                          </div>
                      </div>

                  </div>
                  <div className={"row"}>
                      <div className={"col d-flex justify-content-end"}>
                          <div className={"card"}>
                              <div className={"card-body"}>
                                  <h3 className={"display-5 align-content-center "}>Key Components</h3>
                              </div>
                          </div>
                          <div className="ag-format-container">
                              <div className="ag-courses_box">
                                  {
                                      data.sectionKeyComponents.map((component, index) => {
                                          return (
                                              <div key={index} className="ag-courses_item">
                                                  <div className="ag-courses-item_link">
                                                      <div className="ag-courses-item_bg"></div>
                                                      <div className="ag-courses-item_title ">
                                                          {component}
                                                      </div>

                                                  </div>
                                              </div>
                                          )
                                          }
                                      )
                                  }
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className={"row"}>
                      <div className={"col d-flex justify-content-start"}>
                          <div className={"card"}>
                              <div className={"card-body"}>
                              <h3 className={"display-5 "}>Significance</h3>
                                  {data.sectionSignificance}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          </>
      )
    });
    return (
        <>
            <div className={"scroll-watcher"}></div>
            <div className={"container-fluid"}>
                <div className={"row word-title align-content-center"}>
                    <div className={"col d-flex justify-content-center"}>
                        <h1 className={"display-1"}>Meanings of programming</h1>
                    </div>

                </div>
                {
                    wordSections
                }
            </div>
        </>
    )
}

export default App
