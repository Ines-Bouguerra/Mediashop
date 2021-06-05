import React, { Component } from 'react'
import APIHandler from '../../utils/APIHandler';

export default class SubCategory extends Component {
   
      state = {
        errorRes: false,
        errorMessage: "",
        btnMessage: 0,
        sendData: false,
        subCategoryDataList: [],
        dataLoaded: false,
      };
     //This Method Work When Our Page is Ready
  componentDidMount() {
    this.fetchSubCategoryData();
  }
  async fetchSubCategoryData() {
    this.updateDataAgain();
  }

  async updateDataAgain() {
    var apihandler = new APIHandler();
    var subCategoryDataList = await apihandler.fetchSubCategory();
    this.setState({ subCategoryDataList: subCategoryDataList.data.data });
    this.setState({ dataLoaded: true });
  }

    render() {
        return (
            <div className="">
            {this.state.dataLoaded === false ? (
              <div className="text-center">
                <div className="preloader pl-size-xl">
                  <div className="spinner-layer">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <ul className="sidebar_categories">
                    {this.state.subCategoryDataList.map((category) => (
                      <li>
                        <a href="#!">{category.name}</a>
                      </li>
                    ))}
                  </ul>
            </div>
        )
    }
}
