import React, { Component } from "react";
import APIHandler from "../../utils/APIHandler";

export default class Brand extends Component {
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
    }
    state = {
        errorRes: false,
        errorMessage: "",
        btnMessage: 0,
        sendData: false,
        brandList: [],
        dataLoaded: false,
    };

    async formSubmit(event) {
        event.preventDefault();
        this.setState({ btnMessage: 1 });

        var apiHandler = new APIHandler();
        var response = await apiHandler.saveContactData(
            event.target.name.value,
            event.target.slug.value,
            event.target.created_at.value,
            event.target.updated_at.value,
            event.target.image.value
        );
        console.log(response);
        this.setState({ btnMessage: 0 });
        this.setState({ errorRes: response.data.error });
        this.setState({ errorMessage: response.data.message });
        this.setState({ sendData: true });
        this.updateDataAgain();
    }
    //This Method Work When Our Page is Ready
    componentDidMount() {
        this.fetchBrandData();
    }

    async fetchBrandData() {
        this.updateDataAgain();
    }

    async updateDataAgain() {
        var apihandler = new APIHandler();
        var brandList = await apihandler.fetchBrand();
        this.setState({ brandList: brandList.data.data });
        this.setState({ dataLoaded: true });
    }

    ShowBrandDetails = (eid) => {
        this.props.history.push("/branddetails/" + eid);
    };

    render() {
        return (
            <>
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
                <>

                    <ul className="brands_list">
                        {this.state.brandList.map((brand) => (
                            <li className="brand" key={brand.id}>
                                <a href="xx">{brand.name}</a>
                            </li>

                        ))}
                    </ul>
                </>

            </>);
    }
}
