import {NavLink, useLocation} from "react-router-dom";
import SubMenu from "src/components/common/layout/SubMenu";
import React from "react";
import {TbBellRingingFilled} from "react-icons/tb";
import {useTypedSelector} from "src/state/ReduxSotre";

const Header = () => {
    const location = useLocation()
    const theme = useTypedSelector(i => i.theme)

    const pathName = location.pathname.split("/")?.[1]?.trim()
    return <nav className="relative bg-white rounded-lg shadow ">
        <div className=" px-5  py-4 mx-auto">
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex items-center justify-between">
                    <h4 className={"capitalize text-3xl  text-primary-500"}>
                        {pathName || "Xchanges"}
                    </h4>
                </div>


                <div className="flex items-center mt-4 lg:mt-0">
                    <NavLink to="/notifications"
                    ><TbBellRingingFilled className={"text-primary-600 mx-5"}
                                          size={25}/> </NavLink>
                    <div className="flex items-center focus:outline-none"
                         aria-label="toggle profile dropdown">
                        <SubMenu>

                            <div className="p-1 border-2 border-primary-500 rounded-full">
                                {theme.bitweenHeaderIcon && <img
                                    src={`${theme.bitweenHeaderIcon}`}
                                    className=" w-6 h-6"/>}
                            </div>
                        </SubMenu>
                    </div>
                </div>
            </div>
        </div>
    </nav>
}
export default Header