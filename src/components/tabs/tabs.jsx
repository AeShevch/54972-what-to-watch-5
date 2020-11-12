import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import movieCardProp from "../movie-card/movie-card.prop";

const Tabs = (props) => {
  const {movieData, tabsItems} = props;
  const {pathname, hash} = window.location;
  const currentLink = pathname + hash;
  const [currentTabData] = tabsItems.filter((tabData) => currentLink === tabData.link);
  const CurrentTabComponent = currentTabData.component;

  return (
    <Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabsItems.map((tab) =>
            <li
              className={`movie-nav__item ${currentLink === tab.link ? `movie-nav__item--active` : ``}`}
              key={tab.link}
            >
              <Link to={tab.link} className="movie-nav__link">
                {tab.title}
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <CurrentTabComponent {...movieData} key={`tab-${currentLink}`}/>
    </Fragment>
  );
};

Tabs.propTypes = movieCardProp;

export default Tabs;
