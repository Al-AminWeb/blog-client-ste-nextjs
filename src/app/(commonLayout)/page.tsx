import { Button } from "@/components/ui/button";
import { userServices } from "@/services/user.services";

export default async function Home() {
    const { data, error } = await userServices.getSession();

    return (
        <div>
            {data ? <p>Logged in</p> : <p>Not logged in</p>}
            <Button variant="outline">Click Here</Button>
        </div>
    );
}
