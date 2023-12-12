import CardProfile from '../ui-card-profile/CardProfile';
import CardContent from '../ui-card-content/CardContent';
import Card from '../ui-card/Card';

export default function ReadOnlyCard() {
  return (
    <>
      <Card>
        <CardProfile />
        <CardContent />
      </Card>
    </>
  );
}
