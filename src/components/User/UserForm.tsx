import { Button } from '../Button';
import { FormInput } from '../Form/FormInput';
import FormSelect from '../Form/FormSelect';

const UserForm = () => {
  return (
    <form action="#" className="w-full flex-col space-y-3 md:space-y-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm sm:text-base md:text-lg">
          Name
        </label>
        <FormInput id="name" placeholder="Type your name here" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm sm:text-base md:text-lg">
          Email
        </label>
        <FormInput id="email" type="email" placeholder="Type your email here" />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex w-full flex-col gap-2">
          <label className="text-sm sm:text-base md:text-lg">Gender</label>
          <FormSelect
            options={['Male', 'Female']}
            value="Male"
            placeholder="Choose your gender"
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label className="text-sm sm:text-base md:text-lg">Status</label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <input
                className="hidden"
                id="radio_1"
                type="radio"
                name="radio"
              />
              <label
                className="center-object flex h-10 cursor-pointer border-2 border-gray-200 p-4 lg:h-12"
                htmlFor="radio_2">
                <span className="text-sm font-medium sm:text-base">Active</span>
              </label>
            </div>
            <div>
              <input
                className="hidden"
                id="radio_2"
                type="radio"
                name="radio"
              />
              <label
                className="center-object h-10 cursor-pointer border-2 border-gray-200 lg:h-12"
                htmlFor="radio_2">
                <span className="text-sm font-medium sm:text-base">
                  Inactive
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/12 pt-5">
        <Button
          variant="highlight"
          className="h-10 text-sm tracking-wide lg:h-12 lg:text-base">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
