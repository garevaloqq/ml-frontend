import "./index.scss";

const PageLoader = () => {
  return (
    <div className="loader-container" data-testid="loading">
      <div className="spinner"></div>
    </div>
  );
};

export default PageLoader;
