import {Input} from "@/components/ui/Input";
import Link from "next/link";

export default function SignIn() {
    return (
      <section>
          <div className="mx-auto max-w-7xl relative">
              <div className="max-w-lg mx-auto">
                  <div className="lg:text-balance">
                      <h2
                        className="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-base-900 lg:text-balance"
                      >
                          Join our community
                      </h2>
                      <p className="text-base leading-normal mt-4 text-base-500 font-medium">
                          Sign up to join our community and start building your brand.
                      </p>
                  </div>
                  <form action="#" method="POST" className="mx-auto mt-12 max-w-lg">
                      <div className="flex flex-col gap-y-6">
                          <div>
                              <label className="text-base leading-normal text-base-500 font-medium">
                                  First name
                              </label>
                              <div className="mt-2.5">
                                  <Input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    required
                                    aria-required="true"
                                    aria-describedby="first-name-error"
                                    placeholder="Your first name"
                                  />
                                  <span id="first-name-error" className="text-red-600 text-sm hidden">
                Please enter your first name.
              </span>
                              </div>
                          </div>
                          <div>
                              <label className="text-base leading-normal text-base-500 font-medium">
                                  Email
                              </label>
                              <div className="mt-2.5">
                                  <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    required
                                    aria-required="true"
                                    aria-describedby="email-error"
                                    placeholder="Your email"
                                  />
                                  <span id="email-error" className="text-red-600 text-sm hidden">
                Please enter a valid email address.
              </span>
                              </div>
                          </div>
                      </div>
                      <div className="flex items-center mt-4 gap-3">
                          <Input
                            id="agreement"
                            name="agreement"
                            type="checkbox"
                          />
                          <label className="undefined block text-sm text-base-500 font-medium">
                              You agree to our
                              <Link
                                className="text-base leading-normal text-accent-500 font-medium hover:text-base-500"
                                href="#_"
                              >
                                  Terms of service
                              </Link>
                              and
                              <Link
                                className="text-base leading-normal text-accent-500 font-medium hover:text-base-500"
                                href="#_"
                              >
                                  Privacy Policy
                              </Link>
                          </label>
                      </div>
                      <div className="mt-10">
                          <button
                            className="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-gray-50 bg-accent-600 hover:bg-accent-700 focus:ring-accent-500/50 h-10 px-6 py-3 text-base font-medium rounded-lg w-full"
                          >
                              Sign up
                          </button>
                      </div>
                      <div className="flex items-center mt-4">
                          <p className="text-sm leading-normal text-base-500 font-medium">
                              Don&#39;t have an account? Already have an account?
                              <Link
                                className="text-base leading-normal text-accent-500 font-medium hover:text-base-500"
                                href="#_"
                              >
                                  Sign in
                              </Link>
                          </p>
                      </div>
                  </form>
              </div>
          </div>
      </section>
    )
}