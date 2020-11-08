import React from "react";
import { Link } from "react-router-dom";

interface PageLayoutInterface {
  children: React.ReactNode;
  backPath?: string;
  logout?: boolean;
  title: string;
}

function PageLayout({
  children,
  backPath,
  logout,
  title,
}: PageLayoutInterface) {
  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{title}</h1>
            {backPath && (
              <Link className="button mr-2" to={backPath}>
                Atras
              </Link>
            )}
            {logout && (
              <Link className="button" to="/auth/logout">
                Logout
              </Link>
            )}
          </div>
        </div>
      </section>
      {children}
    </>
  );
}

export default PageLayout;
