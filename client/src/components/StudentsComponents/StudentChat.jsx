import "../Style/StudentCss/StudentChat.css";
import { Navbar } from "../Navbar/Navbar";
export const StudentChat = () => {
  return (
    <>
      {/* content */}

      <section id="content">
       {/* <Navbar /> */}
        <div className="head-title">
          <div className="left">
            <ul className="breadcrumb">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
              </li>
              <li>
                <a className="active" href="#">
                  Message
                </a>
              </li>
            </ul>
          </div>
        </div>

        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <div class="row clearfix">
          <div class="col-lg-12">
            <div class="card2 chat-app">
              <div id="plist" class="people-list">
                <div class="input-group1">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-search"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search..."
                  />
                </div>
                <ul class="list-unstyled chat-list mt-2 mb-0">
                  <li class="clearfix">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt="avatar"
                    />
                    <div class="about">
                      <div class="name">Vincent Porter</div>
                      <div class="status">
                        {" "}
                        <i class="fa fa-circle offline"></i> left 7 mins ago{" "}
                      </div>
                    </div>
                  </li>
                  <li class="clearfix active">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      alt="avatar"
                    />
                    <div class="about">
                      <div class="name">Aiden Chavez</div>
                      <div class="status">
                        {" "}
                        <i class="fa fa-circle online"></i> online{" "}
                      </div>
                    </div>
                  </li>
                  <li class="clearfix">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      alt="avatar"
                    />
                    <div class="about">
                      <div class="name">Mike Thomas</div>
                      <div class="status">
                        {" "}
                        <i class="fa fa-circle online"></i> online{" "}
                      </div>
                    </div>
                  </li>
                  <li class="clearfix">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="avatar"
                    />
                    <div class="about">
                      <div class="name">Christian Kelly</div>
                      <div class="status">
                        {" "}
                        <i class="fa fa-circle offline"></i> left 10 hours ago{" "}
                      </div>
                    </div>
                  </li>
                  <li class="clearfix">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar8.png"
                      alt="avatar"
                    />
                    <div class="about">
                      <div class="name">Monica Ward</div>
                      <div class="status">
                        {" "}
                        <i class="fa fa-circle online"></i> online{" "}
                      </div>
                    </div>
                  </li>
                  <li class="clearfix">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      alt="avatar"
                    />
                    <div class="about">
                      <div class="name">Dean Henry</div>
                      <div class="status">
                        {" "}
                        <i class="fa fa-circle offline"></i> offline since Oct
                        28{" "}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="chat">
                <div class="chat-header clearfix">
                  <div class="row">
                    <div class="col-lg-6">
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        data-target="#view_info"
                      >
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar2.png"
                          alt="avatar"
                        />
                      </a>
                      <div class="chat-about">
                        <h6 class="m-b-0">Aiden Chavez</h6>
                        <small>Last seen: 2 hours ago</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="chat-history">
                  <ul class="m-b-0">
                    <li class="clearfix">
                      <div class="message-data text-right">
                        <span class="message-data-time">10:10 AM, Today</span>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="avatar"
                        />
                      </div>
                      <div class="message other-message float-right">
                        {" "}
                        Hi Aiden, how are you? How is the project coming along?{" "}
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="chat-message clearfix">
                  <div class="input-group2">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter text here..."
                    />
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fa fa-send"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
