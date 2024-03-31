import categories from "../constant";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const createExpenseSchema = z.object({
  description: z.string().min(10).max(300),
  amount: z
    .number({ invalid_type_error: "required a value" })
    .min(0.5)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => {
      return { message: `Please select a valid category` };
    },
  }),
});

type createExpenseType = z.infer<typeof createExpenseSchema>;

type CreateExpenseProps = {
  submitHandler: (data: createExpenseType) => void;
};

const CreateExpense = ({ submitHandler }: CreateExpenseProps) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createExpenseType>({
    resolver: zodResolver(createExpenseSchema),
  });

  return (
    <>
      <form
        className="m-5"
        onSubmit={handleSubmit((data) => {
          submitHandler(data);
          reset();
        })}
      >
        <div className="mb-3 ">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            placeholder="Enter the description"
            className="form-control"
          />

          {errors.description && (
            <p className="text-danger"> {errors.description.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", {
              setValueAs: (value) => parseFloat(value),
            })}
            id="amount"
            type="number"
            placeholder="$"
            className="form-control"
          />

          {errors.amount && (
            <p className="text-danger"> {errors.amount.message}</p>
          )}
        </div>

        <div className="mb-3">
          <select {...register("category")} className="form-select">
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && <p> {errors.category.message}</p>}
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-primary  ml-3">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateExpense;
