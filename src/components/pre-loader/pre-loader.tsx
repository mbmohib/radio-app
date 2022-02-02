interface PreLoaderProps {
  minHeight?: string;
  isLoading: boolean;
  children: React.ReactNode;
}

const PreLoader = ({ isLoading, children }: PreLoaderProps) => (
  <>{isLoading ? <p>loading...</p> : children}</>
);

export default PreLoader;
