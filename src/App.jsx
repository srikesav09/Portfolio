
import Button from './components/ui/Button';
import Card from "./components/ui/Card";
import SectionTitle from './components/ui/SectionTitle';
import Container from "./components/ui/Container";



function App() {
  return (

    <div className="min-h-screen bg-slate-950 py-20">
      <Container>
        <SectionTitle 
        subtitle="Testing"
        title="Design System" />

        <Card className="w-full max-w-lg space-y-6">
          <p>
            This our resuable card.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button>Primary</Button>
            <Button variant="outline">
              outline
            </Button>
            <Button variant="secondary">
              secondary
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default App
