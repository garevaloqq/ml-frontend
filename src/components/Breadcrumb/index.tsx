import { Link } from "react-router-dom";

import "./index.scss";

interface Props {
  categories: string[];
}

function Breadcrumbs({ categories }: Props) {
  const lastIndex = categories.length - 1;

  return (
    <nav>
      {categories.map((category, idx) => {
        if (idx === lastIndex) {
          return (
            <Link key={idx} to="/" className="breadcrumb-active">
              {category}
            </Link>
          );
        }

        return (
          <>
            <Link key={idx} to="/" className="breadcrumb-not-active">
              {category}
            </Link>
            <span className="breadcrumb-arrow">&gt;</span>
          </>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;
