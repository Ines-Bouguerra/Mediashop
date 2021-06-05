import React, { Component } from "react";
import APIHandler from "../../utils/APIHandler";

export default class ContactComponent extends Component {
  state = {
    errorRes: false,
    errorMessage: "",
    btnMessage: 0,
    sendData: false,
    contactDataList: [],
    dataLoaded: false,
  };

  componentDidMount() {
    this.fetchAdminContact();
  }

  async fetchAdminContact() {
    this.updateDataAgain();
  }

  async updateDataAgain() {
    var apihandler = new APIHandler();
    var contactDataList = await apihandler.fetchAdminContact();
    this.setState({ contactDataList: contactDataList.data.data });
    this.setState({ dataLoaded: true });
  }

  render() {
    return (
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="card">
                  <div className="header">
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
                    <h2>All Contact</h2>
                  </div>
                  <div className="body table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Message</th>
                          <th>Added On</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.contactDataList.map((contact) => (
                          <tr key={contact.id}>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone_number}</td>
                            <td>{contact.message}</td>
                            <td>
                              {new Date(contact.added_at).toLocaleString()}
                            </td>
                            <td>
                              <button
                                type="submit"
                                className="  btn bg-cyan btn-circle waves-effect waves-circle waves-float"
                              >
                                <i className="material-icons">email</i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
