import { Shell } from '@/components/layout/shell';
import { Button } from '@/components/ui/button';

type Props = {};

const Home = (props: Props) => {
  return (
    <Shell className="max-w-6xl">
      <section className="mx-auto flex flex-col gap-5 w-full items-center justify-center py-12 lg:py-24 lg:flex-row lg:text-left text-center">
        <div className="flex flex-col justify-center items-center gap-4 lg:items-start">
          <h1 className="text-balance font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Vite + React + Docker + TailwindCSS
          </h1>
          <p
            className="max-w-[42rem] animate-fade-up text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
            style={{ animationDelay: '0.30s', animationFillMode: 'both' }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            laborum sint, repellat architecto quia esse magni, distinctio
            consequatur debitis, officia assumenda alias magnam ipsa quibusdam
            illum ipsam recusandae dignissimos maxime?
          </p>
          <Button>Hello!</Button>
        </div>
        <img className="max-w-[20rem] h-full" src="/feeling-proud.svg" />
      </section>
    </Shell>
  );
};

export default Home;
