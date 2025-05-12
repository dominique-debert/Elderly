import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const ForumCard = () => {

  return (
    <Card
      className="border border-base-200 w-full bg-base-100"
    >
      <CardHeader>
        <CardTitle>
          <h2 className="text-primary text-2xl">Derniers sujets dans le forum</h2>
        </CardTitle>
      </CardHeader>        
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Job</TableHead>
                <TableHead>Favorite Color</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableHead>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </TableHead>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </TableCell>
                <TableCell>Purple</TableCell>
                <TableHead>
                  <button className="btn btn-ghost btn-xs">details</button>
                </TableHead>
              </TableRow>
              <TableRow>
                <TableHead>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </TableHead>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Brice Swyre</div>
                      <div className="text-sm opacity-50">China</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  Carroll Group
                  <br />
                  <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                </TableCell>
                <TableCell>Red</TableCell>
                <TableHead>
                  <button className="btn btn-ghost btn-xs">details</button>
                </TableHead>
              </TableRow>
              <TableRow>
                <TableHead>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </TableHead>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Marjy Ferencz</div>
                      <div className="text-sm opacity-50">Russia</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  Rowe-Schoen
                  <br />
                  <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                </TableCell>
                <TableCell>Crimson</TableCell>
                <TableHead>
                  <button className="btn btn-ghost btn-xs">details</button>
                </TableHead>
              </TableRow>
              <TableRow>
                <TableHead>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </TableHead>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </TableCell>
                <TableCell>Purple</TableCell>
                <TableHead>
                  <button className="btn btn-ghost btn-xs">details</button>
                </TableHead>
              </TableRow>
              <TableRow>
                <TableHead>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </TableHead>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Brice Swyre</div>
                      <div className="text-sm opacity-50">China</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  Carroll Group
                  <br />
                  <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                </TableCell>
                <TableCell>Red</TableCell>
                <TableHead>
                  <button className="btn btn-ghost btn-xs">details</button>
                </TableHead>
              </TableRow>              
              <TableRow>
                <TableHead>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </TableHead>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Brice Swyre</div>
                      <div className="text-sm opacity-50">China</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  Carroll Group
                  <br />
                  <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                </TableCell>
                <TableCell>Red</TableCell>
                <TableHead>
                  <button className="btn btn-ghost btn-xs">details</button>
                </TableHead>
              </TableRow>              
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ForumCard;