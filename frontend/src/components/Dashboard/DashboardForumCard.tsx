import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components";

export function DashboardForumCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <h2 className="text-primary text-2xl">
            Derniers sujets dans le forum
          </h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="border-b border-slate-800">
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </TableHead>
                <TableHead className="border-b border-slate-800">
                  Name
                </TableHead>
                <TableHead className="border-b border-slate-800">Job</TableHead>
                <TableHead className="border-b border-slate-800">
                  Favorite Color
                </TableHead>
                <TableHead className="border-b border-slate-800"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableHead className="border-b border-slate-800">
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </TableHead>
                <TableCell className="border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="border-b border-slate-800">
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </TableCell>
                <TableCell className="border-b border-slate-800">
                  Purple
                </TableCell>
                <TableHead className="border-b border-slate-800">
                  <button className="btn btn-primary btn-sm">details</button>
                </TableHead>
              </TableRow>
              <TableRow>
                <TableHead className="border-b border-slate-800">
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </TableHead>
                <TableCell className="border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Brice Swyre</div>
                      <div className="text-sm opacity-50">China</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="border-b border-slate-800">
                  Carroll Group
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Tax Accountant
                  </span>
                </TableCell>
                <TableCell className="border-b border-slate-800">Red</TableCell>
                <TableHead className="border-b border-slate-800">
                  <button className="btn btn-primary btn-sm">details</button>
                </TableHead>
              </TableRow>
              <TableRow>
                <TableHead className="border-b border-slate-800">
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </TableHead>
                <TableCell className="border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Marjy Ferencz</div>
                      <div className="text-sm opacity-50">Russia</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="border-b border-slate-800">
                  Rowe-Schoen
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Office Assistant I
                  </span>
                </TableCell>
                <TableCell className="border-b border-slate-800">
                  Crimson
                </TableCell>
                <TableHead className="border-b border-slate-800">
                  <button className="btn btn-primary btn-sm">details</button>
                </TableHead>
              </TableRow>
              <TableRow>
                <TableHead className="border-b border-slate-800">
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </TableHead>
                <TableCell className="border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="border-b border-slate-800">
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </TableCell>
                <TableCell className="border-b border-slate-800">
                  Purple
                </TableCell>
                <TableHead className="border-b border-slate-800">
                  <button className="btn btn-primary btn-sm">details</button>
                </TableHead>
              </TableRow>
              <TableRow>
                <TableHead className="border-b border-slate-800">
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </TableHead>
                <TableCell className="border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Brice Swyre</div>
                      <div className="text-sm opacity-50">China</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="border-b border-slate-800">
                  Carroll Group
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Tax Accountant
                  </span>
                </TableCell>
                <TableCell className="border-b border-slate-800">Red</TableCell>
                <TableHead className="border-b border-slate-800">
                  <button className="btn btn-primary btn-sm">details</button>
                </TableHead>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
